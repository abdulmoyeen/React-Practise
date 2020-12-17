import React, { useState } from 'react'

const DisplayList = () => {

    const [itemName, setItemName] = useState("");
    const [itemList, setItemList] = useState([]);


    const handleOnChange = event => setItemName(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        setItemList([
            ...itemList,
            {
                id: itemList.length,
                name: itemName
            }
        ]);
        setItemName("");
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    <input type="text" name="item" value={itemName} onChange={handleOnChange} />
                </label>
                <button type="button" onClick={onSubmit}>Save</button>
            </form>
            <ul>

                {itemList.map((item) => (

                    <li key={item.id} >{item.name}</li>
                ))}

            </ul>
        </>
    )

}

export default DisplayList;