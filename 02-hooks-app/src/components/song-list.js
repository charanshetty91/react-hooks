import React from 'react';
import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import AddSongsForm from './new-songs-form';


const SongsList = () => {

    const [songList, UpdateSongList] = useState([
        { name: "Yarivanu yarivanu", id: 1 },
        { name: "yarige yaroontu", id: 2 },
        { name: "adisitata nesara", id: 3 }
    ]);
    const [count, AddCount] = useState(21);
    const AddSongs = (song) => {
        UpdateSongList([...songList, song])
    }

    useEffect(() => { console.log('useeffect run for count', +count);},[count ])

    useEffect(() => {
        console.log('use effect hook ran', ...songList);
    }, [songList])
    return (
        <div>
            <ul>
                {songList.map(song => {
                    return (<li key={song.id}>{song.name}</li>);
                })}
            </ul>
            <AddSongsForm AddSongs={AddSongs} />
            <button onClick={() => { AddCount(count + 1) }}>count increase to 1 :{count} </button>
        </div>
    );
}
export default SongsList;