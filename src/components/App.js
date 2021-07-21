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

    <PopupWithForm isOpen1={isEditProfilePopupOpen} onClose={closeAllPopups}/> 
    <PopupWithForm isOpen2={isAddPlacePopupOpen} onClose={closeAllPopups}/>  
    <PopupWithForm isOpen3={isEditAvatarPopupOpen} onClose={closeAllPopups}/>   
    <ImagePopup />  
  </>
    );
}

export default App;