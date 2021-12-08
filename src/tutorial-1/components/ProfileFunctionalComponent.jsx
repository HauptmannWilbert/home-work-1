import React from 'react';

function ProfileFunctionalComponent(props) {
    return(
        <div className="registration__box">
            <h2>Функциональный компонент</h2>
            <div className="registration__bottom">
                <div className="registration__name">Привет, <b>{props.name.split(" ")[0]}!</b></div>
                <div className="registration__date">Дата регистрации: {props.registredAt}</div>
            </div>
         </div>
    )
}

export default ProfileFunctionalComponent;