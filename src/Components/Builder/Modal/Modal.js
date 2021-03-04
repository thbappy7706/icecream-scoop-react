import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children}) => {
    return (

        <!-- modal start -->
        <div>
            <div class={classes.backdrop}/>
            <div class={classes.modalBody}>
                {children}
            </div>
        </div>
        <!-- modal end -->
    );
};

export default Modal;
