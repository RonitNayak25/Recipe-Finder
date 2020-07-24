import React from "react";
import "./App.css";
import { Form } from "./components/Form";
import Recipes from "./components/Recipes";

class App extends React.Component {
  state = {
    recipes: [],
  };
  getRecipe = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}&page=1`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe-Finder</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
