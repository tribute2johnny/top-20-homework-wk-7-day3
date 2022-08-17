import React from 'react';
import './song.css';

const Song = ({artist, position, title, image, audio}) => {

    return (
    <div className="song">
    <p>{artist}</p>
    <p>{position}</p>
    <p>{title}</p>
    <img src={image} alt="Ooopsie"></img>
    <audio controls src={audio} type="audio/mpeg"></audio>
    </div>    
    ) 
        

}

export default Song;
