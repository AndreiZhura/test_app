import React from "react";
import './discounts.css';
import pyaterochka from '../../img/pyaterochka.webp'


function Discount() {
    return (
        <div className="discounts">

            <div className="discount">
                <div className="one">
                    <button className="discount__setting"></button>
                    <img className="discount__image" src={pyaterochka}/>
                </div>
                <div className="discount__container">
                    <h3 className="discount__title">
                        Название скидки
                    </h3>
                    <button className="discount__like discount__like_add"></button>
                </div>
            </div>
        </div>
    );
};

export default Discount;