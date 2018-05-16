import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Layout } from "./components";
import store from "./store";
import { saveState } from "./helpers/localStorage";
import "./main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    store.subscribe(() => {
      saveState(store.getState());
    });
    const { hasError } = this.state;
    let component = (
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    if (hasError) {
      component = <h1>Something went wrong</h1>;
    }
    return component;
  }
}

render(<App />, document.getElementById("app"));
