import React from 'react';

class ProfileClassComponent extends React.Component {
    render() {
        return(
            <div className="registration__box">
                <h2>Классовый компонент</h2>
                <div className="registration__bottom">
                    <div className="registration__name">Привет, <b>{this.props.name.split(" ")[0]}!</b></div>
                    <div className="registration__date">Дата регистрации: {this.props.registredAt}</div>
                </div>
            </div>
        )
    }
}

export default ProfileClassComponent;