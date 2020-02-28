import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const handleButtonClick = useCallback(() => {
        setCount(state => state + 1);
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Welcome to My Cool App!</h1>
                <button id="click-count-button" onClick={handleButtonClick}>Click Me!</button>
                <div>
                    <p>Button click count: {count}</p>
                </div>
            </header>
        </div>
    );
}

export default App;
