import React from 'react';
import PopupWithForm   from './PopupWithForm';

function EditAvatarPopup({isOpen,onClose,onUpdateAvatar}) {

    const [url, setUrl]=React.useState();
   
    const changeUrl=(e)=>{
      setUrl(e.target.value);  
    }

    function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
        avatar: url,
      });
    }

  return ( 
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit ={handleSubmit}>
        <div className="form__container">
        <input type="url" value={url} onChange ={changeUrl} className="popup__input popup__input_type_text" id="avatar" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
        <span className="popup__input-error avatar-error"></span>
        </div>
    </PopupWithForm>  
  );
}

export default EditAvatarPopup;