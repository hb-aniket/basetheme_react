import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { routes } from "./Routes";


const routingList = [
  {
    pageTitle: "BASEPATH",
    pathname: routes.BASEPATH,
    private: false,
    element: Login,
  },
  {
    pageTitle: "LOGIN",
    pathname: routes.LOGIN,
    private: false,
    element: Login,
  },
  {
    pageTitle: "SIGNUP",
    pathname: routes.SIGNUP,
    private: false,
    element: Signup,
  },
  {
    pageTitle: "DASHBOARD",
    pathname: routes.DASHBOARD,
    private: true,
    element: Dashboard,
  },
];

export default routingList;