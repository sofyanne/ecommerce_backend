import React from "react";

export default function Bouton({children, lien, icone}) {
    if (lien) {
        return <a href={lien}>{children}<i className={"fa-solid fa-" + icone}></i></a>
    } else {

        return <button>{children}<i className={"fa-solid fa-" + icone}></i></button>
    }
}