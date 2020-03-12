import React from 'react';
import viadeLogo from './../res/logo/logo_full.jpeg';

function Home() {
    return (
        <div className="App-header">
            <h1>Welcome to</h1>
            <img
                src={viadeLogo}
                width="280"
                height="300"
                className="d-inline-block align-top"
                alt="Viade logo"
            />
            <h2>V 0.1</h2>
        </div>
    );
}

export default Home;