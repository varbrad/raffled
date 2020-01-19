import React, { Suspense } from "/web_modules/react.js";
import { render } from "/web_modules/react-dom.js";
const Index = React.lazy(() => import("./pages/index"));

const App = ({
  children
}) => React.createElement("div", null, React.createElement("p", null, "APP"), React.createElement(Suspense, {
  fallback: React.createElement("p", null, "Loading")
}, React.createElement(Index, null)));

render(React.createElement(App, null), document.getElementById('app'));