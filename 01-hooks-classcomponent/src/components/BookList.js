import React, { Component } from "react";
import { ThemeContext } from "../contexts/Theamcontexts";
class BookList extends Component {

    static contextType = ThemeContext;

    render() {
        const { isLightTheme, dark, light } = this.context;
        const theme = isLightTheme ? light : dark;
        return (

            <div className="book-list" style={{color:theme.syntax,  background : theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>Poorna chandrA THEjaswi </li>
                    <li style={{background:theme.ui}}>Yana the great journey</li>
                    <li style={{background:theme.ui}}>Wings of fire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;