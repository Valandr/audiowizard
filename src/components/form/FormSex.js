import React, { useContext } from 'react';
import TopNav from '../TopNav'
import LeftNav from '../LeftNav'
import { UserContext } from '../UserContext'
import { useHistory } from "react-router-dom";

function FormSex() {
    const user = useContext(UserContext);

    const { push: navigate } = useHistory();

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
                            className="btn btn-light"
                            onChange={(e) => user.setHomme(e.target.value)}
                            onClick={() => navigate("/fullname")}
                        >
                            Homme
                        </button>
                        <button
                            id="femme"
                            type="button"
                            className="btn btn-light"
                            onChange={(e) => user.setFemme(e.target.value)}
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