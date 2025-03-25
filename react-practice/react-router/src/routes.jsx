import App from "./App";
import Profile from "./profile";
import ErrorPage from "./notFound";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "profile/",
  //   element: <Profile />,
  // },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
