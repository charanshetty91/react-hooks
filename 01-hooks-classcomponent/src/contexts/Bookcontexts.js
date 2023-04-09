import React,{createContext,useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,SetBooks] = useState([
        {title:"Poorna chandrA Thejaswi", id:1},
        {title:"Yana the great journey", id:2},
        {title:"Wings of fire", id:3},
        {title:"Power of subconsious mind", id:4}
    ])
    return (<BookContext.Provider value = {{books}}>
        {props.children}
    </BookContext.Provider>  );
} 
export default BookContextProvider;