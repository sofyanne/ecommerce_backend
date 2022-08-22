import React from "react";
import './sidemenu.scss'

export default function Sidemenu() {
    return <ul className={"side-menu"}>
        <li>Gestion des produits</li>
        <li>Gestion des utilisateurs</li>
        <li>Dashboard</li>
    </ul>;
}