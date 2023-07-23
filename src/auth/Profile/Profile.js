import React from "react";
import './Profile.css'
//import HeaderProfile from '../../../components/common/Header/HeaderProfile';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
    <section className="profile">
      <div className="profile-main">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className='profile-main__form' >
          <div className="profile-main__container">

            <span className="profile-main__title">Имя</span>
            <input
              className="profile-main__input"
              id="name-input"
              placeholder="Виталий"
              type="text"
              name="name-link"
              readonly="readonly"
            />
          </div>
          <div className="profile-main__container">
            <span className="profile-main__title">E-mail</span>
            <input
              className="profile-main__input"
              id="email-input"
              placeholder="pochta@yandex.ru"
              type="email"
              name="email-link"
              readonly="readonly"
            />
          </div>
          <button className='profile-main__button profile-main__button_register '>Редактировать</button>
          <Link to="/signin" className='profile-main__text-button'>Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
    </>
  );
};

export default Profile