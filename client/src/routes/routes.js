import { lazy } from "react";

const Main = lazy(() => import("../pages/Main"));
const ViewEmail = lazy(() => import("../components/ViewEmail"));
const Emails = lazy(() => import("../components/Emails"));


const routes = {
    main: {
        path: '/',
        element: Main
    },

    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/views',
        element: ViewEmail
    },
    emails: {
        path: '/emails',
        element: Emails
    },


};

export { routes };

