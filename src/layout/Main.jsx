import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import routingList from "../routes/RoutingList";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import CommonLoader from "../components/CommonLoader";
import ErrorFallback from "./ErrorFallback";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const Main = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<CommonLoader />}>
        <Routes>
          {routingList.map((route, index) => {
            const key = index;
            const Element = route.element;

            return route.private ? (
              <Route
                key={key}
                path="/"
                element={
                  <PrivateLayout
                    data={route}
                    permissionCode={route.permissionCode}
                    menuCode={route.menuCode}
                    relavantMenuCode={route.relavantMenuCode}
                  />
                }
              >
                <Route path={route.pathname} element={<Element />} />
              </Route>
            ) : (
              <Route key={key} path="/" element={<PublicLayout data={route} />}>
                <Route path={route.pathname} element={<Element />} />
              </Route>
            );
          })}

          {/* Catch-all Not Found route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Main;
