import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import pokeball from "./../../assets/pokeball.png";
import "./PokeCard.scss";
import "../Home/Home.scss";

const PokeCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [command, setCommand] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(command);
    alert(`The following command was correctly saved: ` + command);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${parseInt(id)}`
        );
        if (result.status !== 200) {
          console.error("Something wrong happened...");
          navigate(`/error/${id}`);
        }

        const data = await result.json();

        setPokemon(data);
        setCommand(`p!catch ${data.name}`);
      };

      if (id) {
        fetchData();
      }
    } catch (e) {
      console.error("Uh oh, something happened", e);
    }
  }, [id, command, navigate]);

  const Card = () => {
    const imageSource = pokemon.sprites.other["official-artwork"].front_default;
    return (
      <div className="poke-card">
        <div className="poke-card__image">
          <img src={imageSource} alt={pokemon.name} />
          <div className="poke-card__info" onClick={() => copy()}>
            Copy: {command}
          </div>
          <div className="poke-card__info" onClick={() => navigate("/")}>
            Return home
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {pokemon ? (
        <Card />
      ) : (
        <div className="home">
          <img src={pokeball} alt="pokeball" className="pokeball bounce" />
          <span className="loading">Loading</span>
        </div>
      )}
    </div>
  );
};

export default PokeCard;
