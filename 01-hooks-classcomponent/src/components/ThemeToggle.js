import React, { Component } from "react";
import { ThemeContext } from "../contexts/Theamcontexts";

class ToggleTheme extends Component {
    //inbuilt property 'contextType' should use as same
    static contextType = ThemeContext;
    render() {
        const {toggleThemefunc} = this.context;
        return (

            <button onClick={toggleThemefunc}>Toggle the Theme</button>
        );
    }
}

export default ToggleTheme;     