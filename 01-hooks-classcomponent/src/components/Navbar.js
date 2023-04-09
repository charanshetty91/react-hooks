import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theamcontexts';
import { AuthContext } from '../contexts/Authcontexts';

const Navbar = () => {

    const { isAuthenticated, DoAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={DoAuth}>{isAuthenticated ? 'LoggedIn' : 'LoogedOut'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;

//old class componet format and context object use method

// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/Theamcontexts';
// import {AuthContext} from '../contexts/Authcontexts';

// class Navbar extends Component {
//     //static contextType = ThemeContext;
//     render() {

//         return(
//         <AuthContext.Consumer>{(authContext)=>(
//             <ThemeContext.Consumer>{(themeContext) => {
//                 const {isAuthenticated,DoAuth} = authContext;
//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                     <nav style={{ background: theme.ui, color: theme.syntax }}>
//                         <h1>Context App</h1>
//                         <div onClick = {DoAuth}>{isAuthenticated ? 'LoggedIn' : 'LoogedOut'}</div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 );
//             }}
//             </ThemeContext.Consumer>
//         )}</AuthContext.Consumer>
//        );

//     }
// }

// export default Navbar;