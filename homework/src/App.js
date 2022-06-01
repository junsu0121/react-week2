import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import WordList from "./WordList";
import Add from "./Add";
import Modify from "./Modify";
import { loadWordFB } from "./redux/modules/homework";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    //화면에 mount(떳을) 때 실행
    dispatch(loadWordFB());
    // return 하면  unmount될 때 실행
  }, [dispatch]);
  return (
    <div
      className="App"
      style={{
        background: "url(./img/fruit.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Switch>
          <Route path="/" exact>
            <WordList />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route path="/modify/:index" component={Modify} />
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
