import React, { Component, createContext, } from 'react';

//create global object using createContext()
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    render() {
        return (
            //add neccessary data into global object using provider
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
