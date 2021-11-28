import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import pokeball from "./../../assets/pokeball.png";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pokemonId, setPokemonId] = useState(null);
  const error = location.pathname.includes("error");

  const submit = (e) => {
    e.preventDefault();
    if (!pokemonId || isNaN(pokemonId)) {
      alert("Please give a valid Pokemon ID");
      return;
    }
    navigate(`/pokemon/${pokemonId}`);
  };

  return (
    <div className="home">
      <div className="stage">
        <img src={pokeball} alt="pokeball" className="pokeball bounce" />
      </div>
      Nothing to see here...
      <div>
        {`Go to `}
        <span className="pokemon-route">/pokemon/[pokemon_id]</span>
        {`to get your command `}
      </div>
      <div>{`OR type your Pokemon ID and press "Get Command!! `}</div>
      <div>
        <form onSubmit={submit}>
          {`Pokemon ID: `}
          <input
            type="text"
            id="pokemon-id"
            name="pokemon-id"
            onChange={(e) => setPokemonId(e.target.value)}
          />
          <button type="submit" value="Submit">
            Get Command!
          </button>
        </form>
        {error && (
          <div className="error">
            The given Pokemon ID had an issue. Please, try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
