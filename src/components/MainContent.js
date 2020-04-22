import React from 'react';
import FormIdentity from './form/FormIdentity'

function MainContent () {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <h1 className="mt-4">Peux-tu indiquer l'identité du patient?</h1>
                    <FormIdentity />
                </div>
            </div>
        );
    }

export default MainContent;