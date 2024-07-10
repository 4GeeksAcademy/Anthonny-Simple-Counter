//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const digitSix = Math.floor(counter / 100000) % 10;
    const digitFive = Math.floor(counter / 10000) % 10;
    const digitFour = Math.floor(counter / 1000) % 10;
    const digitThree = Math.floor(counter / 100) % 10;
    const digitTwo = Math.floor(counter / 10) % 10;
    const digitOne = Math.floor(counter) % 10;

    return (
        <div className="container">
            <h1 className="text-center">Simple Counter</h1>

            <div className="BigCounter">
                <div className="icon"><i className="fa-regular fa-clock"></i></div>
                <div className="six">{digitSix}</div>
                <div className="five">{digitFive}</div>
                <div className="four">{digitFour}</div>
                <div className="three">{digitThree}</div>
                <div className="two">{digitTwo}</div>
                <div className="one">{digitOne}</div>
            </div>
        </div>
    );
}

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter />);