import React,{Component} from 'react';
import classes from './HomePoints.module.css';
import Routes from '../../components/Routes/Routes.js';
class Homepoints extends Component{

    render()
    {
        return(       
            <div>
                <header className={classes.Header}>WELCOME TO <br /> HOME POINTS STORE <br/></header>                     
                <Routes/>
            </div>
        );
    }


};

export default Homepoints;