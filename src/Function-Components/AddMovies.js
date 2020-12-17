import React, { useState } from "react";

const FavoriteMovies = () => {
    const [movies, setMovies] = useState([{ name: "Heat" }]);
    const [newMovie, setNewMovie] = useState("");

    const add = movie => setMovies([...movies, movie]);

    const remove = index => {
        setMovies([...movies.slice(0, index), ...movies.slice(index + 1)]);
    };

    const handleAddClick = () => {
        if (newMovie === "") {
            return;
        }
        add({ name: newMovie });
        setNewMovie("");
    };

    return (
        <>
            <div className="movies">
                {movies.map((movie, index) => {
                    return <Movie movie={movie} onRemove={() => remove(index)} />;
                })}
            </div>
            <div className="add-movie">
                <input
                    type="text"
                    value={newMovie}
                    onChange={event => setNewMovie(event.target.value)}
                />
                <button onClick={handleAddClick}>Add movie</button>
            </div>
        </>
    );
}

function Movie({ movie, onRemove }) {
    return (
        <div className="movie">
            <span>{movie.name}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default FavoriteMovies;