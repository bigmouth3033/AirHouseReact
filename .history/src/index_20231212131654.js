import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/ContextProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
const stripePromise = loadStripe(
  "pk_test_51OMEQvCQa88qCWLBVl5p1ctSKLQSkvWoecYTM4fcDS4A0ZbdfB8T1U44HBhhc5n52qLCGHBSroCKW3yjp3xGbiIh00NDBpcWZJ"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Elements stripe={stripePromise}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </Elements>
    </QueryClientProvider>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
