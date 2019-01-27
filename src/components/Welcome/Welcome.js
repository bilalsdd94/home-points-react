import React from 'react';
import {Link} from 'react-router-dom';
const welcome =() =>
(
    <div>
        <h1>Please select Account or Display</h1>
        <nav>
                <li><Link to={{
                    pathname: '/account',
                    search: "?account-submit=true" 

                }}>Account</Link></li>
                
                <li><Link to={{
                    pathname: '/display',}}>
                    
                    Display</Link></li>

            </nav>
    </div>
);
export default welcome;