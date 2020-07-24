import React from 'react';

export const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="recipeName" id="" />
        <button className="form__button">Search</button>
    </form>
)