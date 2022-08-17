import React from 'react';
import Song from './Song';
import './song.css';

const MusicList = ({song}) => {

    const songChart = song.map((song, index) => {
        return (
            <Song 
              key={song.id.attributes["im:id"]}
              position={index + 1}
              title={song['im:name'].label}
              artist={song['im:artist'].label}
              image={song['im:image'][1].label}
              audio={song.link[1].attributes.href}
            />
          )
    })
        
        
    

    return (
        <div>
        <ul className="songChart">
          {songChart}
        </ul>
      </div>
      )

}

export default MusicList;