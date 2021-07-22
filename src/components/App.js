import React from "react";
import './../pages/index.css';
import Header from './Header';
import Main  from './Main';
import Footer  from './Footer';
import PopupWithForm   from './PopupWithForm';
import ImagePopup   from './ImagePopup';
import api from './../utils/api';

function App () {
// Хук, управляющий внутренним состоянием.
const [isOpen , setIsOpen ] = React.useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);



    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups () {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }


    return (<>
    <div className="root-page"/>     
    <div className="root">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
    <Footer />      
    </div>

    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="form__container">
        <input type="text" className="popup__input popup__input_type_name" id="name" name="nameInput" placeholder="Имя" required  />
        <span className="popup__input-error name-error"></span>
        <input type="text" className="popup__input popup__input_type_job" id="job" name="jobInput" placeholder="О себе" required  />
        <span className="popup__input-error job-error"></span>
        <button type="submit" className="popup__button">Сохранить</button>
        </div>
    </PopupWithForm>

    <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="form__container">
        <input type="text" className="popup__input popup__input_type_text" id="add" name="name" placeholder="Название" required />
        <span className="popup__input-error add-error"></span>
        <input type="url" className="popup__input popup__input_type_link" id="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-error"></span>
        <button type="submit" className="popup__button popup__button_type_add">Создать</button>
        </div>
    </PopupWithForm>

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="form__container">
        <input type="url" className="popup__input popup__input_type_text" id="avatar" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
        <span className="popup__input-error avatar-error"></span>
        <button type="submit" className="popup__button popup__button_type_add">Сохранить</button>
        </div>
    </PopupWithForm>

    <div className="popup popup_type_question">
        <div className="popup__container">
            <form id="newQuestionPopup" name="questionPopup" className="popup__form">
                <fieldset className="popup__form-set">
                    <button type="button" className="popup__close popup__close_type_question"> 
                    <div className="popup__close-icon"></div>
                </button>
                    <label className="popup__title popup__title_type_question">Вы уверены?</label>
                    <button type="submit" className="popup__button popup__button_type_question">Да</button>
                </fieldset>
            </form>
        </div>
    </div>
 
    <ImagePopup />  
  </>
    );
}

export default App;