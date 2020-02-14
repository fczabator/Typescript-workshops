import React from 'react';
import { Compliance } from "grommet-icons";
import { Box, Button, Collapsible, Heading, Grommet, Anchor } from "grommet";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { grommet } from "grommet/themes";
import {Cards, Classes, Tree, Company, ShowcaseEvents as Events, ShowcaseParams as Params} from './exercises';
import './App.css';

export const App = () => {
  const [openNotification, setOpenNotification] = React.useState();

  return (
    <Grommet full theme={grommet}>
      <Router>
        <Box fill>
          <Box
            as="header"
            direction="row"
            align="center"
            pad={{ vertical: "small", horizontal: "medium" }}
            justify="start"
            background="neutral-3"
            elevation="large"
            style={{ zIndex: 1000 }}
          >
            <Button
              onClick={() => setOpenNotification(!openNotification)}
              icon={<Compliance color="white" />}
            />
            <Heading level={3} margin="none" color="white">
              <strong>Typescript workshops</strong>
            </Heading>
          </Box>
          <Box flex direction="row">
            <Collapsible direction="horizontal" open={openNotification}>
              <Box
                flex
                width="small"
                background="light-2"
                pad="small"
                elevation="small"
              >
                <Link to="/cards"><Anchor label="Cards" /></Link>
                <Link to="/tree"><Anchor label="Tree" /></Link>
                <Link to="/1"><Anchor label="Classes" /></Link>
                <Link to="/generics"><Anchor label="Generics" /></Link>
                <Link to="/events"><Anchor label="Events" /></Link>
                <Link to="/params"><Anchor label="Params" /></Link>
              </Box>
            </Collapsible>
            <Box
              pad={{ vertical: "medium", horizontal: "medium" }}
            >
                <Switch>
                  <Route path="/1">
                    <Classes />
                  </Route>
                  <Route path="/tree">
                    <Tree />
                  </Route>
                  <Route path="/generics">
                    <Company />
                  </Route>
                  <Route path="/events">
                    <Events />
                  </Route>
                  <Route path="/params">
                    <Params />
                  </Route>
                  <Route path="/cards">
                    <Cards />
                  </Route>
                </Switch>
            </Box>
          </Box>
        </Box>
      </Router>
    </Grommet>
  );
};

export default App;
