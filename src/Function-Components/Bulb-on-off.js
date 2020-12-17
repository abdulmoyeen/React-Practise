import React, { useState } from 'react'

const BulkUseCase = () => {
    const [on, setOn] = useState(false);
    const [count, setCount] = useState(1);
    const lightOn =  () => setOn(on => !on);;
    const addBulbs = () => setCount(count => count + 1);
    const bulb = <div className={on  ? 'bulb-on' : 'bulb-off'}></div>;
    const bulbs = Array(count).fill(bulb);
    return (
        <div>

            { <div className="bulbs">{bulbs}</div>}
            {/* {count.map((item)=><div key={item.id} className={'bulbs'}>{item.bulb}</div>)} */}
            <button type="button" onClick={lightOn}>On/Off</button>
            <button type="button" onClick={addBulbs}>Add Bulb</button>
        </div>
    )

}

export default BulkUseCase;