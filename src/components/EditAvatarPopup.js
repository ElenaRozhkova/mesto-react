import React from 'react';
import PopupWithForm   from './PopupWithForm';

function EditAvatarPopup({isOpen,onClose}) {

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
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} buttonText="Сохранить">
        <div className="form__container">
        <input type="url" className="popup__input popup__input_type_text" id="avatar" name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
        <span className="popup__input-error avatar-error"></span>
        </div>
    </PopupWithForm>  
  );
}

export default EditAvatarPopup;