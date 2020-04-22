import React, { useState } from 'react';
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'

function FormFullname() {

    const nameFirstname = 'Valérie Andriani'
    return (
        <fragment>
            <TopNav />
            <div className="d-flex" id="wrapper">
                <LeftNav />
                <div className="form-fullname">
                    <h1>
                        Bonjour, {nameFirstname}
                    </h1>
                </div>
            </div>
        </fragment>
    );
}

export default FormFullname;