import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_img">
        <form id="imagePopup" className="popup__img" novalidate>
            <button type="button" className="popup__close popup__close_type_img"> 
                    <div class="popup__close-icon"></div>
                </button>
            <img className="popup__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt="Ссылка" />
            <label type="text" className="popup__name" name="nameInputImage" placeholder="Название" required></label>
        </form>
    </div>
  );
}

export default ImagePopup;