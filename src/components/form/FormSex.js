import React, { useState } from 'react';
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'
import { useHistory } from "react-router-dom";

function FormSex(homme, femme) {
    const [sex, setSex] = useState("");
    const { push: navigate } = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting ${sex.homme}`)
    }
    return (
        <fragment>
            <TopNav />
            <div className="d-flex" id="wrapper">
                <LeftNav />
                <div className="identity-content">
                    <div>
                        <h1>
                            Peux-tu indiquer son sexe?
                        </h1>
                    </div>
                    <div id="sex-identity">
                        <button
                            id="homme"
                            type="button"
                            value={sex}
                            className="btn btn-light"
                            onClick={() => navigate("/fullname")}
                        >
                            Homme
                        </button>
                        <button
                            id="femme"
                            type="button"
                            value={sex}
                            className="btn btn-light"
                            onClick={() => navigate("/fullname")}
                        >
                            Femme
                        </button>
                    </div>
                </div>
            </div>
        </fragment>
    );
}

export default FormSex;