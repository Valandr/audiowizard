import React from 'react';
import LeftNav from './LeftNav';

import MainContent from './MainContent';
import TopNav from './TopNav';


function MainApp () {
        return (
            <fragment>
                <TopNav />
                <div className="d-flex" id="wrapper">
                    <LeftNav />
                    <MainContent />
                </div>
            </fragment>
        );
    }

export default MainApp;