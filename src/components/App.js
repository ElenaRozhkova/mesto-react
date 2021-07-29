import React from "react";
import './../pages/index.css';
import Header from './Header';
import Main  from './Main';
import Footer  from './Footer';
import ImagePopup   from './ImagePopup';
import {api} from "./../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup  from "./AddPlacePopup";
import {CurrentUserContext} from "./../contexts/CurrentUserContext";

function App () {
// Хук, управляющий внутренним состоянием.
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});
const [currentUser, setCurrentUser] = React.useState({});
 
  React.useEffect (()=>{
    api.getUserInfo ()
    .then ((user)=>{
     setCurrentUser(user);
    })
    
    .catch((err) => {
      console.log(err);
    })

  },[]);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root-page"/>     
      <div className="root">
      <Header />
      <Main onCardClick={handleCardClick}  onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer />      
      </div>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
  
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>  
    </CurrentUserContext.Provider>
  </>
    );
}

export default App;