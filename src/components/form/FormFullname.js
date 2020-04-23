import React, { useContext, useState } from 'react';
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'
import { UserContext } from '../UserContext'


function FormFullname() {
    const user = useContext(UserContext);
    
    return (
        <fragment>
            <TopNav />
            <div className="d-flex" id="wrapper">
                <LeftNav />
                <div className="form-fullname">
                    <h1>
                        Bonjour, {user.homme} ou  {user.femme} <br /> <strong>{user.name}</strong>  <strong>{user.firstname}</strong>
                    </h1>
                </div>
            </div>
        </fragment>
    );
}

export default FormFullname;