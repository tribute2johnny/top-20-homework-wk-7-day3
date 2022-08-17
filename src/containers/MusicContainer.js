import { useState, useEffect } from "react";
import MusicList from "../components/MusicList";
import './MusicContainer.css';


const MusicContainer = () => {
    const [song, setSong] = useState([]);

    useEffect(() => {
        getAll()
    }, [])


    const getAll = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(song => setSong(song.feed.entry))
    }

    // const getRock = () => {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json')
    //     .then(result => result.json())
    //     .then(song => setSong(song.feed.entry))
    // }

    // const getDance = () => {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json')
    //     .then(result => result.json())
    //     .then(song => setSong(song.feed.entry))
    // }

    // const getCountry = () => {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json')
    //     .then(result => result.json())
    //     .then(song => setSong(song.feed.entry))
    // }

    // const genreSelector = () => {

    // }


    return(
        <div>
            <h1 className="h1">This Weeks Top 20!</h1>
            <div className="card">
            <MusicList song={song}/>
            </div>
        </div>
    )
}

export default MusicContainer;