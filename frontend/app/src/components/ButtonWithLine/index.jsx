import React from 'react';
import style from './style.module.css';

const ButtonWithLine = ({children,onClick=() => {}}) => {
    return (
       
    <div className={style.BrandBtnWrapper} onClick = {onClick}>
        <h2 className={style.BrandBtn}>{children}</h2>
    </div> 
    );
};

export default ButtonWithLine;