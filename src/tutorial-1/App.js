import React from 'react';

import { ProfileClassComponent, ProfileFunctionalComponent } from './components';

function App(){
    return(
        <div className="lessons">
            <h1>Урок 1</h1>
            <div className="registration__list">
                <ProfileClassComponent name="Вася Пупкин 1" registredAt={new Date(2020, 5, 10)} />

                <ProfileFunctionalComponent name="Вася Пупкин 2" registredAt={new Date(2021, 5, 22)} />
            </div>
        </div>
    );
}

export default App;