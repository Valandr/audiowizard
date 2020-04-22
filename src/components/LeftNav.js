import React from 'react';

function LeftNav () {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">

                <div className="list-group list-group-flush">
                    <div classNameName="list-items">
                        <a href='/' className="list-group-item list-group-item-action bg-light">1ère visite</a>
                    </div>
                    <div classNameName="list-items">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Coordonnées</a>
                    </div>
                    <div classNameName="list-items">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    </div>
                    <div classNameName="list-items">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    </div>
                    <div classNameName="list-items">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    </div>
                    <div classNameName="list-items">
                        <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                    </div>
                </div>
            </div>
        );
    }

export default LeftNav;