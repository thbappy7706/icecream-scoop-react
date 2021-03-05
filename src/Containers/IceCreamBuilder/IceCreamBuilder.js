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


//add
    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };


//delete
    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            };
        });
    };




    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <Icecream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}

export default IceCreamBuilder;