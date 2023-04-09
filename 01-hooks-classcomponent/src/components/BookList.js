import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theamcontexts";
import { BookContext } from "../contexts/Bookcontexts";

//useContext hooks use , this will remove static contexttype object creation 
const BookList = () => {
    const { isLightTheme, dark, light } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (

        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{book.title} </li>
                    );
                })}              
            </ul>
        </div>
    );
}

export default BookList;