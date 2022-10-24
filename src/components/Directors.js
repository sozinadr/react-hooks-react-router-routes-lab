import { directors } from "../data";

function Directors() {
    const directorsList = directors.map((director) => ( <
        div key = { director.name } >
        <
        h3 > { director.name } < /h3> <
        ul > {
            director.movies.map((e) => ( <
                li key = { e } > { e } < /li>
            ))
        } <
        /ul>

        <
        /div>
    ))


    return <div >
        <
        h1 > Directors Page < /h1>  { directorsList } <
        /div>;
}

export default Directors;