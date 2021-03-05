import React, {Component} from 'react';
import classes from './IceCreamBuilder.module.css'
import Icecream from "../../Components/Icecream/Icecream";
import Builder from "../../Components/Builder/Builder";

class IceCreamBuilder extends Component {
    state={
        items:{
            vanilla:45,
            chocolate:50,
            orange:30,
            lemon:25,
            strawberry:55,
        },
        scoops:[],
        totalPrice:0,
    };


    render() {
        const {items}= this.state;
        return (
            <div className={[classes.container,'container'].join(' ')}>
                <Icecream items={items}/>
                <Builder/>
            </div>

        );
    }
}

export default IceCreamBuilder;