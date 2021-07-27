import React from 'react';
import PopupWithForm   from './PopupWithForm';

function AddPlacePopup ({isOpen,onClose}) {

   /* const [name, setName]=React.useState();
    const [description , setDescription]=React.useState();
   
    const changeName=(e)=>{
        setName(e.target.value);  
        console.log(name);
    }

    const changeDescription=(e)=>{
        setDescription(e.target.value);  
        console.log(description);
    }*/

  return ( 
    <PopupWithForm name="add" title="Новое место" isOpen={isOpen} onClose={onClose} buttonText="Создать">
        <div className="form__container">
        <input type="text" className="popup__input popup__input_type_text" id="add" name="name" placeholder="Название" required />
        <span className="popup__input-error add-error"></span>
        <input type="url" className="popup__input popup__input_type_link" id="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error url-error"></span>
        </div>
    </PopupWithForm> 
  );
}

export default AddPlacePopup;