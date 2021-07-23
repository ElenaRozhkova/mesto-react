import React from "react";
import './../pages/index.css';
import Header from './Header';
import Main  from './Main';
import Footer  from './Footer';
import PopupWithForm   from './PopupWithForm';
import ImagePopup   from './ImagePopup';

function App () {
// Хук, управляющий внутренним состоянием.
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    const handleEsc = (event) => {
       if (event.key === 'Escape') {
        closeAllPopups();
      }
    };
     document.addEventListener('keydown', handleEsc);
    return () => {
     document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  React.useEffect(() => {
    const closeByOverlay = (evt) => {
        if (evt.target.classList.contains('popup')) {
            closeAllPopups();
          }
      }
     document.addEventListener('mousedown', closeByOverlay);

    return () => {
     document.removeEventListener('mousedown', closeByOverlay);
    };
  }, []);


    function handleCardClick(card) {
       setSelectedCard(card);
    }

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
        setSelectedCard({});
    }


    return (<>
    <div className="root-page"/>     
    <div className="root">
    <Header />
    <Main onCardClick={handleCardClick}  onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
    <Footer />      
    </div>

    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <div className="form__container">
        <input type="text" className="popup__input popup__input_type_name" id="name" name="nameInput" placeholder="Имя" required  />
        <span className="popup__input-error name-error"></span>
        <input type="text" className="popup__input popup__input_type_job" id="job" name="jobInput" placeholder="О себе" required  />
        <span className="popup__input-error job-error"></span>
        </div>
    </PopupWithForm>

    <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
        <div className="form__container">
        <input type="text" className="popup__input popup__input_type_text" id="add" name="name" placeholder="Название" required />
        <span className="popup__input-error add-error"></span>
        <input type="url" className="popup__input popup__input_type_link" id="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-error"></span>
        </div>
    </PopupWithForm>

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <div className="form__container">
        <input type="url" className="popup__input popup__input_type_text" id="avatar" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
        <span className="popup__input-error avatar-error"></span>
        </div>
    </PopupWithForm>
 
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>  
  </>
    );
}

export default App;