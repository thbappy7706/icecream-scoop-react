import React from 'react';
import classes from './Builder.module.css';

const Builder = () => {
    return (
        <div >
            <div className={classes.builder}>
                <h3>Build your own Ice Cream Sundae</h3>
                {/*// <!-- items start -->*/}

                // <!-- total price start -->

                <button type="button"  className={[classes.order, 'rounded'].join()}>
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default Builder;