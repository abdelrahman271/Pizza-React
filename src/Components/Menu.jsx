import React from "react";
import Pizza from "./Pizza.jsx";
import pizzaData from "./pizzaData.jsx";





function Menu() {
    const pizza = pizzaData;
    const num = pizza.length;
    return (
    <div className="menu">
        <h2>Our Menu</h2>
        {num > 0 ? (
    <>
    <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
    </p>
        <ul className="pizzas">
            {pizza.map((item) => (
                <Pizza pizzaObj={item} key={item.name} />
            ))}
        </ul>
        </>
        ) : null}
    </div>
    );
}


export default Menu;
