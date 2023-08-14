import React, { useState } from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Favorite from '../favorite/favorite'
import PopupDeleteCategories from './popupDeleteCategory/popupDeleteCategory'
import Footer from "./footer/footer";



function Main(props) {

    const [search, setSearch] = useState('');
    const [click, setClick] = useState(false);

    const [popupInform, setPopupInform] = useState('');
    const [popupClose, setPopupClose] = useState(true);

    function onInputHandler(value) {
        setSearch(value);
    }

    function SearchClick(e) {
        e.preventDefault()
        if (search === "") {
            setClick(false)
        } else {
            setClick(true)
        }

    }

    function handlePopup(text) {
        if(text){
            setPopupInform(text)
            setPopupClose(!popupClose)
        }
        else{
            setPopupClose(!popupClose)
        }
    }

    return (
        <>
            <main className="main">
                <PopupDeleteCategories
                    popupInform = {popupInform}
                    popupClose = {popupClose}
                    handlePopup = {handlePopup}
                />
                <Search
                    search={search}
                    onInputHandler={onInputHandler}
                    SearchClick={SearchClick}
                    loggedIn={props.loggedIn}
                />

                {click === true ?

                    <Favorite
                        search={search}
                        discount={props.discount}
                        dataDiscount={props.dataDiscount}
                        loggedIn={props.loggedIn}
                    />
                    :
                    props.category.length === 0 ? <></> :
                        props.category.map((category, id) => {
                            return (
                                <Categories
                                    key={id}
                                    category={category}
                                    discount={props.discount}
                                    onChange={props.onChange}
                                    dataDiscount={props.dataDiscount}
                                    infoCategoryID={props.infoCategoryID}
                                    loggedIn={props.loggedIn}
                                    handlePopup={handlePopup}
                                />
                            )
                        })}


                <AddCategories
                    handleNewCategory={props.handleNewCategory}
                    loggedIn={props.loggedIn}
                />
            </main>
            <Footer />
        </>
    );
}

export default Main;