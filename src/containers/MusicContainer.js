import { useState, useEffect } from "react";
import MusicList from "../components/MusicList";


const MusicContainer = () => {
    const [song, setSong] = useState([]);

    useEffect(() => {
        getSong()
    }, [])

    const getSong = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(song => setSong(song.feed.entry))
    }


    return(
        <div>
            <h1>This Weeks Top 20!</h1>
            <MusicList song={song}/>

        </div>
    )
}

export default MusicContainer;