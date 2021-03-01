import React from 'react';
import classes from './Icecream.module.css'
import Scoop from "./Scoop/Scoop";
const Icecream = () => {
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}></p>
                // <!-- <p>Please start adding scoops</p> -->
                <Scoop/>
                <div className={classes.cherry}></div>
            </div>
        </div>
    );
};

export default Icecream;
