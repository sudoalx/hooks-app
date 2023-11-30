import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import HooksApp from "./HooksApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
import SimpleForm from "./02-useEffect/SimpleForm";
import CustomHookForm from "./02-useEffect/CustomHookForm";
import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CustomHookForm /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    <Layout />
  </React.Fragment>
);
