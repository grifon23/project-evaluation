import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../../projects/page/HomePage";
import { Estimates } from "../../estimaties/page/Estimates";
import { Header } from "../components/Header";
import "./style.css";
export const Routes = () => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="main-container">
            <HomePage cards={cards} />
          </div>
        </Route>
        <Route path="/project/:title">
          <div className="main-container">
            <Estimates cards={cards} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};
