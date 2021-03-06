import React from "react";
import { Link } from "react-router-dom";
class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };
  componentDidMount = async () => {
    const id = this.props.location.state.id;
    const req_api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${id}`
    );
    const data = await req_api_call.json();
    this.setState({ activeRecipe: data.recipe });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container-fluid">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Full Recipe:
              <span>
                <a href={recipe.publisher_url}>{recipe.source_url}</a>
              </span>
            </p>
            <p className="active-recipe__website">
              Ingredients:
              <span>
                <ul className="list-group">
                {recipe.ingredients.map((ingredient) => {
                    return (
                    <li style={{ width: "70%" }} className="list-group-item">
                        {ingredient}
                    </li>
                    );
                })}
                </ul>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
