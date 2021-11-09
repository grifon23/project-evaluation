import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../../../projects/components/HomePage";
import { DetalTable } from "../../../estimaties/components/DetalTable";
import { Header } from "../Header";
import "./style.css";
export const Pages = () => {
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
            <DetalTable cards={cards} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};
