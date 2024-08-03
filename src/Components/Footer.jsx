import React from "react";
import Order from "./Order.jsx";


function Footer() {
    const hour=new Date().getHours();
    const open=10;
    const close=22;
    const isOpen=(hour>=open && hour<=close);
    return (
    <footer>
        {isOpen?
        <Order close={close} />   
        :
        <p>We're happy welcome to between {open}:00 and {close}:00</p>}
    </footer>
    ) 
}

export default Footer;
