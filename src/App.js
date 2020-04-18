import React from "react";
import { Helmet } from "react-helmet";
import titlePic from "../src/assets/images/title.png";
import RightNavigation from "./components/RightNavigation";
import TopNavigation from "./components/TopNavigation";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link
          rel="stylesheet"
          href={titlePic}
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <title>Algorithm Pars</title>
      </Helmet>
      <TopNavigation />
      <RightNavigation />
    </div>
  );
};

export default App;
