import React from 'react';

const Song = ({artist, position, title, image, audio}) => {

    return (
    <div>
    <li>{artist}</li>
    <li>{position}</li>
    <li>{title}</li>
    <img src={image} alt="Ooopsie"></img>
    <audio controls src={audio} type="audio/mpeg"></audio>
    <hr></hr>
    </div>    
    ) 
        

}

export default Song;
