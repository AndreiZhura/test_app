import React from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Footer from "./footer/footer";



function Main(props) {
   
    return (
        <>
            <main className="main">
                <Search
                    search={props.search}
                    onInputHandler={props.onInputHandler}
                />
                {props.category.length === 0 ? <div>Добавьте новую категорию</div> :
                    props.category.map((category, id) => {
                        return (
                            <Categories
                                key = {id}
                                category={category}
                                discount = {props.discount}
                                onChange = {props.onChange}
                                func =  {props.func}
                            />
                        )
                    })}

                <AddCategories />
            </main>
            <Footer />
        </>
    );
}

export default Main;