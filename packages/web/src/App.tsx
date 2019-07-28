import React from "react";

import css from "App.module.scss";
import api from "utils/api";
import logo from "./logo.svg";

class App extends React.Component {
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await api.get("/auth/user");
      console.log(response);
    } catch (e) {
      if (e.response.status === 401) {
        const url = process.env.REACT_APP_BASE_URL + "/auth/facebook";
        console.log(url);
        window.open(url, "_self");
      }
    }
  };

  render() {
    return (
      <div className={css.App}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
