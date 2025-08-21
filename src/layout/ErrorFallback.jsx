const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="text-center p-4">
      <h2>Something went wrong.</h2>
      <pre className="text-red-500">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="btn btn-primary mt-2">
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
