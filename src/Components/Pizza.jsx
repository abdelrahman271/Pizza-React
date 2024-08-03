import React from "react";


function Pizza({pizzaObj}) {
    // if(props.pizzaObj.soldOut)return null;
    return (
    <li className={`pizza ${pizzaObj.soldOut?'sold-out':''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.Name}></img>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <p>{pizzaObj.soldOut?'SOLD OUT':pizzaObj.price}</p>
        </div>
    </li>
    );
}


export default Pizza;


