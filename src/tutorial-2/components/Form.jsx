import React from 'react';

function Form() {

    let email = "";
    let password = "";

    function handleInput(event) {
        if(event.target.type === "text"){
            email = event.target.value
        }
        if(event.target.type === "text"){
            password = event.target.value
        }
    }

    function handleSubmit(event){
        event.preventDefault();

        if(email.trim()!=="" && password.trim()!==""){
            event.target.reset();  
            console.log({ email, password });
            email = "";
            password = "";
        } else {
            alert('заполните поля');
        }
    }

    return(
        <form onSubmit={handleSubmit} action="" method="" className="fos__form">
            <input onChange={handleInput} className="fos__input" name="email" placeholder="E-Mail" type="text" />
            <input onChange={handleInput} className="fos__input" name="password" placeholder="Пароль" type="password" />
            <button className="fos__button" type="submit">Войти</button>
        </form>
    )
}

export default Form;