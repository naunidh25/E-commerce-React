import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import DATA from "../../data/data";

const List = () => {

  return (
    <div className="list">
      {DATA?.map((item) => (
       <Card item={item} key={item.id} />
       ))}
    </div>
  );
};

export default List;