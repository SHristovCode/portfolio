import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import { Home, Contact } from './pages';

import './index.scss';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <main style={{ marginTop: '54px' }}>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </main>
        </BrowserRouter>
    );
};

render(
    <App />,
    document.getElementById('app'),
);
