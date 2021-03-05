import React from 'react';
import classes from './Icecream.module.css'
import Scoop from "./Scoop/Scoop";
const Icecream = ({items}) => {
    const flavours=Object.keys(items);  //Items are now convert into an array
    console.log(flavours);
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}/>
                {flavours.map((flavor)=>(
                    <Scoop scoop={flavor}/>
                    ))}
                <div className={classes.cherry}/>

            </div>
        </div>
    );
};

export default Icecream;
