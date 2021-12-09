import React from 'react';

class ProfileClassComponent extends React.Component {
    render() {
        let name =  this.props.name.split(' ').splice(0,1);
        const data = this.props.registredAt.toLocaleString(
            'ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

        return(
            <div className="registration__box">
                <h2>Классовый компонент</h2>
                <div className="registration__bottom">
                    <div className="registration__name">Привет, <b>{name}!</b></div>
                    <div className="registration__date">Дата регистрации: {data}</div>
                </div>
            </div>
        )
    }
}

export default ProfileClassComponent;