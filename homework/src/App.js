import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import WordList from "./WordList";
import Add from "./Add";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact>
            <WordList />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 100vh;
  background-color: aliceblue;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
