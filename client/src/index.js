import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App.js";
import combine from "./reducers/combine.js"

const store=createStore(combine);

render(<Provider store={store}>
  <App />
  </Provider>,document.getElementById('root'));
