import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'
import '../../settingsDiscount/settingsDiscount.css'




function Categories(props) {

    function onClickButton() {
        const positionCategory = props.discount.map((value) => {
            return value.category === props.category._id
        })

        const filterCategory = positionCategory.filter((filter) => {
            return filter === true
        })
        if (filterCategory.length !== 0) {
            const notDelete = 'данную категорию нельзя удалять пока не удаленны все карточки';
            props.handlePopup(notDelete, false);
            props.setCAtegoryId(props.category._id);
        } else {
            const deleteCategory = 'вы уверенны что хотите удалить данную категорию';
            props.handlePopup(deleteCategory, true);
            props.setCAtegoryId(props.category._id);
        }



    }
    console.log(props.loggedIn)

    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">{props.category.categories}</p>
                    {
                        props.loggedIn ?
                        <button className="bascet-delete bascet-delete_category" onClick={onClickButton}></button>:<></>
                    }
                </div>
                <Discounts
                    category={props.category}
                    discount={props.discount}
                    dataDiscount={props.dataDiscount}
                    infoCategoryID={props.infoCategoryID}
                    handleAddDiscount={props.handleAddDiscount}
                    loggedIn={props.loggedIn}
                />

            </div>

        </div>
    );
};

export default Categories;