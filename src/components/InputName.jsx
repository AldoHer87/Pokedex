import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import pokedexLogo from '/src/assets/pokedexLogo.png';

const InputName = () => {

    const dispatch = useDispatch();
    const [ inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const clickButton = () => {
          dispatch(changeUserName(inputValue));
          navigate("/pokedex");
    }

    return (
        <div className='input-name'>
            <img className='logo' src={pokedexLogo} alt="" />
            <h1>¡Hello Trainer!</h1>
            <p>Give me your name to star</p>
            <div className='put-name'>
                <input type="text" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={clickButton}>Submit</button>
            </div>
        </div>
    );
};

export default InputName;