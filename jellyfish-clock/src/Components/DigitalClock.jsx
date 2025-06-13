import React, { useState, useEffect } from 'react'

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    //updates the timer every second and stops when the app closes
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval (intervalId)
        }
    }, []);

    function formatTime() {

        //create variables for hours, minute, and second
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        //ensures that hours wont be in military time
        hours = hours % 12 || 12;

        //displays the time
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    //shows 0s when time is in the 1 digits
    function padZero (number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className = "clock-container">
            <div className = "clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock