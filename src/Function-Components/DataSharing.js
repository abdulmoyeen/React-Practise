import React, { useState } from 'react';

const DataSharing = () => {
    const [txtContent, setContent] = useState('My Heading');
    const [btnText, changeButtonText] = useState('');
    const handleChange = event => setContent(event.target.value);

    const btnClick = event => {
        setTimeout(()=>changeButtonText('Expired'), 10000)
    }

    return (
        <div>
            <Heading value={txtContent} />
            <Input value={txtContent} onInputChange={handleChange}>Set Content:</Input>
            <Button value={btnText} handleClick={btnClick} />
        </div>
    )
}

const Heading = ({ value }) => {
    return (
        <p>{value}</p>
    )
}

const Input = ({ value, onInputChange, children }) => {


    return (
        <label>
            {children}
            <input type="text" value={value} onChange={onInputChange} />
        </label>
    )
}

const Button = ({ value, handleClick }) => {
    const defaultText = 'About to Expiry';
    const onChangeText = value || defaultText;

    return (
        <button type="button" onClick={handleClick}>{onChangeText}</button>
    )
}
export default DataSharing;