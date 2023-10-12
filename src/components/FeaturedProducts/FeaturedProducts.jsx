import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import DATA from "../../data/data";

const FeaturedProducts = ({type}) =>{

    return (
        <div className="featuredProducts">
          <div className="top">
            <h1>{type} products</h1>
            <p>
            Discover M&H's handpicked pieces celebrating your 
            unique style. Stay on-trend with the latest must-haves 
            and innovations. Be a trendsetter with us.
            </p>
          </div>
          <div className="bottom">
            {DATA.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
      );
}



export default FeaturedProducts