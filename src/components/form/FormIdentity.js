import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function FormIdentity() {
    const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const { push: navigate } = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting ${name} ${firstname}`)
    }

    
    return (
        <form id="form-input" onSubmit={() => navigate("/identity")}>
            <label>
                <input
                    className="fullname"
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="fullname"
                    type="text"
                    placeholder="Prénom"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
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

