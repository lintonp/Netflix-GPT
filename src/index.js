import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

import LoginPage from "./Components/LoginPage";
import GPTpage from "./Components/GPTPage/GPTpage";
import Body from "./Components/Body";

const BrowsePage = lazy(() => import("./Components/BrowsePage"));

const CBR = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/browse",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <BrowsePage />
          </Suspense>
        ),
        children: [
          {
            path: "/browse",
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <Body />
              </Suspense>
            ),
          },
          {
            path: "/browse/gpt",
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <GPTpage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={CBR} />);

/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
