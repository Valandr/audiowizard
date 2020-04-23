import React, {useContext} from 'react';
import { UserContext } from '../UserContext'
import { useHistory } from "react-router-dom";



function FormIdentity() {

    const user = useContext(UserContext);
    const { push: navigate } = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        navigate("/identity")

    }

    return (
        <form id="form-input" onSubmit={handleSubmit}>
            <label>
                <input
                    className="fullname"
                    placeholder="Nom"
                    onChange={e => user.setName(e.target.value)}
                    required
                />
                <input
                    className="fullname"
                    placeholder="Prénom"
                    onChange={e => user.setFirstname(e.target.value)}
                    required
                />
            </label>
            <input
                id="submit-button"
                type="submit"
                value="Submit"
            />
        </form>
    );
}

export default FormIdentity;

