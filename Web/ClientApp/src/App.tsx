import React from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import "antd/dist/antd.dark.less";

import "./custom.css";

export default function App() {
    return (
        <React.Fragment>
            <Route exact path="/" component={Home} />
        </React.Fragment>
    );
}
