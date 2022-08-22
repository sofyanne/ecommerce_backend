import React from 'react';
import './Header.scss'
import Bouton from "./Bouton/Bouton";

const Header = () => {
    return (
        <header>
            <div className="conteneur-gauche">
                <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Utilisateurs</li>
                    <li>Produits</li>
                    <li>Catégories</li>
                </ul>
            </div>
            <div className="conteneur-droite">
                <Bouton icone="user-lock">Connexion</Bouton>
                <Bouton icone="user-plus" lien={"inscription"}>Inscription</Bouton>
            </div>
        </header>
    );
};

export default Header;