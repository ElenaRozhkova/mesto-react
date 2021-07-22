import React from 'react';

function PopupWithForm (props) {

  return (
<div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>   
   <div className= {`popup__container popup__container-${props.name}`}>
       <form  name="${props.name}" className="popup__form">
           <fieldset className="popup__form-set">
               <button type="button" onClick ={props.onClose} className="popup__close popup__close_type_${props.name}"> 
               <div className="popup__close-icon"></div>
               </button>
               <h2 className="popup__title">{props.title}</h2>
               {props.children}
           </fieldset>
       </form>
   </div>
</div>


        

/*  

<div className="popup popup_type_question">
        <div className="popup__container">
            <form id="newQuestionPopup" name="questionPopup" className="popup__form" novalidate>
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
*/
    
  );
}

export default PopupWithForm;