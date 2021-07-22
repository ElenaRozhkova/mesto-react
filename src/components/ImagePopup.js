import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img ${props.card.link ? "popup_opened" : ""}`}>
        <form id="imagePopup" className="popup__img">
            <button type="button" className="popup__close popup__close_type_img" onClick={props.onClose}> 
                    <div className="popup__close-icon"></div>
                </button>
            <img className="popup__image" src={`${props.card.link}`} alt="Ссылка" />
            <label type="text" className="popup__name" name="nameInputImage" placeholder="Название" required>{props.card.name}</label>
        </form>
    </div>
  );
}

export default ImagePopup;