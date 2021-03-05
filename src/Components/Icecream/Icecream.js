import React from 'react';
import classes from './Icecream.module.css'
import Scoop from "./Scoop/Scoop";
const Icecream = ({scoops}) => {
    // const flavours=Object.keys(scoops);  //Items are now convert into an array
    // console.log(flavours);
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}/>
                {scoops.map((scoop)=>
                    <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>)}

                <div className={classes.cherry}/>

            </div>
        </div>
    );
};

export default Icecream;
