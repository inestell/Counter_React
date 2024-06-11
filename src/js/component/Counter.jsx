import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter () {
    
    const [count, setCount] = useState(0);
 
    useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <h2>This is a counter:</h2>
            
            <h1>
                <span className="clock"><FontAwesomeIcon icon={faClock} /></span>
                {count}
            </h1>
        </div>
    )

}

export default SecondsCounter;