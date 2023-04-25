import "antd/dist/antd.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "../components/ErrorHandler";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "../services/constants";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {

  const [queryClient] =  useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary FallbackComponent={<ErrorHandler />}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </QueryClientProvider>
  );
}

export default MyApp;
