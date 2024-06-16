import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbarDiv">

            <table width="100%">
            <tr>
                <td>            <Link to='/'>Home </Link>  
                </td>
                <td>            <Link to='/dashboard'>Dashboard </Link> 
                </td>
                <td>             <Link to='/contact'>Contact</Link>
                </td>
            </tr>
        </table>

        </div>
    )
};

export default Navbar