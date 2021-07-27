import React from 'react';
import PopupWithForm   from './PopupWithForm';

function EditProfilePopup({isOpen,onClose}) {

    const [name, setName]=React.useState();
    const [description , setDescription]=React.useState();
   
    const changeName=(e)=>{
        setName(e.target.value);  
        console.log(name);
    }

    const changeDescription=(e)=>{
        setDescription(e.target.value);  
        console.log(description);
    }

  return ( 
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonText="Сохранить">
    <div className="form__container">
    <input type="text" value={name} onChange ={changeName} className="popup__input popup__input_type_name" id="name" name="nameInput" placeholder="Имя" required  />
    <span className="popup__input-error name-error"></span>
    <input type="text" value={description} onChange ={changeDescription} className="popup__input popup__input_type_job" id="job" name="jobInput" placeholder="О себе" required  />
    <span className="popup__input-error job-error"></span>
    </div>
    </PopupWithForm>
   
  );
}

export default EditProfilePopup;