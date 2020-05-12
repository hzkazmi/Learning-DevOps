import { Router, Location } from "@reach/router";
import React from "react";
import ProgramDetails from "../components/ProgramDetails";
import Page from "../components/Page";
import SEO from "../components/SEO";

const DynamicProgramRoute = (props) => {
  console.log("props", props);
  return (
    <Page>
      <SEO title="P rograms" />
      <Location>
        {({ location }) => (
          <div>
            {console.log("location", location)}
            <Router location={location}>
              <ProgramDetails path="/details/program/:program" />
            </Router>
          </div>
        )}
      </Location>
    </Page>
  );
};

export default DynamicProgramRoute;
