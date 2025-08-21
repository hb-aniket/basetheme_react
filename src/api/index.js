import axios from "axios";

// Set your environment base URL here
const ENV_API_URL = import.meta.env.VITE_API_BASE_URL || ""; // fallback if undefined

// ✅ Helper to build query string
const buildQueryString = (params = {}) =>
  new URLSearchParams(params).toString();

/**
 * General API caller
 * @param {string} endPoint - API endpoint (relative or absolute URL)
 * @param {object} data - Request body data
 * @param {string} method - HTTP method (GET, POST, etc.)
 * @param {object} queryParams - Object for query string (only for GET)
 * @param {object} addedHeaders - Optional headers
 */
const commonCall = async (
  endPoint,
  data = {},
  method = "GET",
  queryParams = {},
  addedHeaders = {}
) => {
  const isAbsoluteUrl = /^https?:\/\//.test(endPoint);
  const finalURL =
    (isAbsoluteUrl ? endPoint : ENV_API_URL + endPoint) +
    (Object.keys(queryParams).length
      ? `?${buildQueryString(queryParams)}`
      : "");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...addedHeaders,
  };

  try {
    const response = await axios({
      url: finalURL,
      method,
      data: ["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase())
        ? data
        : undefined,
      headers,
    });

    return {
      data: response.data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    return {
      data: error?.response?.data || null,
      status: error?.response?.status || 500,
      message: error?.message || "Something went wrong",
      success: false,
    };
  }
};

export const getAPI = (endpoint, params = {}, headers = {}) =>
  commonCall(endpoint, {}, "GET", params, headers);

export const postAPI = (endpoint, data = {}, headers = {}) =>
  commonCall(endpoint, data, "POST", {}, headers);

export const putAPI = (endpoint, data = {}, headers = {}) =>
  commonCall(endpoint, data, "PUT", {}, headers);

export const deleteAPI = (endpoint, data = {}, headers = {}) =>
  commonCall(endpoint, data, "DELETE", {}, headers);