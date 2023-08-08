import React, { useState } from "react";
import '../../settingsDiscount/settingsDiscount'

function AddPromo(props) {

    const [promocode, setPromocode] = useState('');
    const [date, setDate] = useState('');
 
    
    function handleSubmitPromo(e){
        e.preventDefault();
        props.handlePromo(promocode, date,props.infoDiscount._id)
        props.setCounter(0);
    }

    function handlePromocode(e) {
        console.log(e.target.value)
        setPromocode(e.target.value);
    }

    function handleData(e) {
        //console.log(e.target.value)
        setDate(e.target.value);
    }


    return (
        <>
            <form>
                <div className="input__promocode">
                    <input type="text"
                        placeholder="Промокод"
                        className="input__add-promocode"
                        onChange={handlePromocode}
                    />
                    <input type="date"
                        className="input__add-date"
                        placeholder="До __ __ ______г."
                        onChange={handleData}
                    />
                </div>
                <button className="setting__button setting__buttons_add-discount" onClick={handleSubmitPromo}  >СОХРАНИТЬ</button>
            </form>

        </>
    );
}

export default AddPromo;