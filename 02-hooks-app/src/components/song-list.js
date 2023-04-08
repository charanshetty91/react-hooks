import React from 'react';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import AddSongsForm from './new-songs-form';


const SongsList = () => {

    const [songList, UpdateSongList] = useState([
        { name: "Yarivanu yarivanu", id: 1 },
        { name: "yarige yaroontu", id: 2 },
        { name: "adisitata nesara", id: 3 }
    ]);
    const AddSongs = (song) => {
        console.log(song);
        UpdateSongList([...songList, song])
    }
    return (
        <div>
            <ul>
                {songList.map(song => {
                    return (<li key={song.id}>{song.name}</li>);
                })}
            </ul>
            <AddSongsForm AddSongs ={AddSongs}/>
        </div>
    );
}
export default SongsList;