import { createBrowserRouter } from "react-router-dom";
import Home from "./home/page";
import ErrorPage from "./error-page/page";
import Services from "./services/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "Services/",
        element: <Services />,
        errorElement: <ErrorPage />,
    },
]);

export default router;