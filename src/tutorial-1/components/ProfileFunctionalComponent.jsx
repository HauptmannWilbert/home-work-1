import React from 'react';

function ProfileFunctionalComponent(props) {
    let name =  props.name.split(' ').splice(0,1);
    const data = props.registredAt.toLocaleString(
        'ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    return(
        <div className="registration__box">
            <h2>Функциональный компонент</h2>
            <div className="registration__bottom">
                <p className="registration__name">Привет, <b>{name}!</b></p>
                <div className="registration__date">Дата регистрации: {data}</div>
            </div>
         </div>
    )
}

export default ProfileFunctionalComponent;