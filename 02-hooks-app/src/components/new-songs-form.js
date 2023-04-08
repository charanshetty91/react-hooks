import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddSongsForm = ({AddSongs}) => {
    const [textBoxValue, OnChangeTextUpdate] = useState('')

    const OnSubmitForm = (e) => {
        e.preventDefault();
        console.log(textBoxValue);
        AddSongs({ name: textBoxValue, id: uuidv4() });
    }
    return (
        <form onSubmit={OnSubmitForm}>
            <label>Song Name</label>
            <input type="text" value={textBoxValue} required onChange={(e) => OnChangeTextUpdate(e.target.value)}></input>
            <input type="submit" value="Add songs" />
        </form>
    );
}
export default AddSongsForm;