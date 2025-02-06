import { useEffect, useState } from "react";

export default function DigitalClock(){
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setClock(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [])

    function formatTime(){
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }
    
    return(
        <div className="flex custom-bg h-screen items-center justify-center" id="clock-container">
            <div className="text-white font-bold text-5xl sm:text-7xl md:text-9xl" id="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}