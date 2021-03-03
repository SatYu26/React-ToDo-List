import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate, persistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import "./index.css";
import App from "./App";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
