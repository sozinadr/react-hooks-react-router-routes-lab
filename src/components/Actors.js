import React from "react";
import { actors } from "../data";



function Actors() {

    const actorsList = actors.map((actor) => ( <
        div key = { actor.name } >
        <
        h3 > { actor.name } < /h3> <
        ul > {
            actor.movies.map((movie) => ( <
                li key = { movie } > { movie } < /li>
            ))
        } <
        /ul> <
        /div>
    ))


    return ( <
        div >
        <
        h1 > Actors page < /h1> { actorsList } <
        /div>
    );
}

export default Actors;