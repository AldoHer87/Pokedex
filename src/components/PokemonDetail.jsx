import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokedexLogo from '/src/assets/pokedexLogo.png';

const PokemonDetail = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(() => alert("Ese pokemon no existe"))
    }, [])

    console.log(pokemon)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='poke-detail'>
            <img className='logo' src={pokedexLogo} alt="" />
            <div className='detail'>
                <h2>{pokemon.name}</h2>
                <h3><b>#</b> {id}</h3>
                <img src={pokemon.sprites?.front_default} alt=""/>
                {/* <p><b>Height:</b>{pokemon.height}  <b>Weight:</b>{pokemon.weight}</p> */}
            </div>
            <div className='information'>
                <div className='info height'>
                    <h3>Height</h3>
                    <p>{pokemon.height}</p>
                </div>
                <div className='info weight'>
                    <h3>Weight</h3>
                    <p>{pokemon.weight}</p>
                </div>
                <div className='info type'>
                    <h3>Types</h3>
                    <p>{pokemon.types?.[0]?.type.name} {pokemon.types?.[1]?.type.name}</p>
                </div>
                <div className='info ability'>
                    <h3>Abilities</h3>
                    <p>{pokemon.abilities?.[0]?.ability.name} {pokemon.abilities?.[1]?.ability.name}</p>
                </div>
            </div>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PokemonDetail;