import React, { Component } from 'react';

//Stateless Functional Component
/*const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1"> Total Unique Items {props.total}</span>
        </nav>
    );
}*/

//Destructing arguments
const NavBar = ({total}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1"> Total Unique Items {total}</span>
        </nav>
    );
}

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav class="navbar navbar-light bg-light">
//                 <span class="navbar-brand mb-0 h1"> Total Unique Items {this.props.total}</span>
//             </nav>
//         );
//     }
// }
 
export default NavBar;