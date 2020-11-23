import React, { useState } from "react";
import Form from "./Form";
import Target from "./Target";
import Foot from "./Foot";
import { IState, IProps } from "../Interfaces/CardInter"

const MainLayout: React.FC<IProps> = (props) => {
  const [state, setState] = useState<IState>({
    number: Math.floor(Math.random() * 10000000000000000),
    expir: new Date().toDateString(),
    username: "",
    typetarget: null
  });

  const Handled = (w) => {
    let value = w.target.name === "username" ? w.target.value : w.target.value;
    setState({ ...state, [w.target.name]: value });
  };
  return (
    <div className="Main">
      <Form Handleds={Handled} />
      <Target {...state} />
      <Foot />
    </div>
  );
};

export default MainLayout;
