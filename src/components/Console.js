import { useState } from "react";

const Console = ({ setShowModalCharts }) => {

    const [inputValue, setInputValue] = useState(null);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.toLowerCase() === 'npm start') {
            setShowModalCharts(true);
        } else {
            console.log('no');
        }
    }
  
    return (
        <div className="console-box" id="id-console">
            <div className="title-console">
                <p>terminal</p>
            </div>
            <div className="route-input">
                <p>{`PS C:\Jhonny\Documents\Portafolio>`}</p>
                <form action="#">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInput}
                        id="input-console"
                    />
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        className="submit"
                    />
                </form>
            </div>
        </div>
    );
}
  
export default Console;