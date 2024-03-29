import React from "react";
import '../settingsDiscount/settingsDiscount.css'
import './lookDiscount.css'
import GetPromocodePeople from "../main/getPromocodePeople/getPromocodePeople";
import Footer from "../main/footer/footer";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/constants";

function LookDiscount(props) {

    return (
        <div className="look__settings">
            <div className="look__setting" >
                <div className="setting__buttons">
                    <Link to='/'>
                        <button className="setting__button look__font-size">Назад</button>
                    </Link>
                </div>

                {
                    props.infoDiscount.image ?
                        <div className="look__file-container" >
                            <img className="look__file-image"
                                src={`${BASE_URL}` + `${props.infoDiscount.image}`} alt="главная картинка" />
                        </div> : <></>
                }
                {
                    props.infoDiscount.description ?
                        <p className={"look__text look__text-padding look__font-size"
                        }>{props.infoDiscount.description}</p>
                        :
                        <></>
                }

                {
                    props.promocode.length === 0 ? <></> :
                        props.promocode.map((value) => {
                            return (
                                props.infoDiscount._id === value.position ?
                                    <GetPromocodePeople
                                        key={value._id}
                                        value={value}
                                    /> : <></>
                            );
                        })
                }
                {
                    props.infoDiscount.link ?
                        <button className="button__link">
                            <a href={props.infoDiscount.link} target="_blank"
                                className="button__text look__font-size">
                                Перейти на страницу акции
                            </a>
                        </button> : <></>
                }


                {
                    props.infoDiscount.barcode ?
                        <div className="look__file-container">
                            <img className="look__file-image" src={`${BASE_URL}` + `${props.infoDiscount.barcode}`} alt="штрихкод" />
                        </div>
                        :
                        <>
                        </>
                }

                <Footer
                    fullTerms={props.infoDiscount.fullTerms}
                />
            </div>
        </div>
    );
}

export default LookDiscount;