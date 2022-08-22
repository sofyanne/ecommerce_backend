import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="conteneur-gauche">
                <img className="logo"/>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Utilisateurs</li>
                    <li>Produits</li>
                    <li>Catégories</li>
                </ul>
            </div>
            <div className="conteneur-droite">
            </div>
        </header>
    );
};

export default Header;