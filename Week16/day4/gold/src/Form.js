
import { useState } from "react";

function Form() {

    let [username, setUsername] = useState('');
    let [userAge, setUserAge] = useState({ userAge: '', ErrorMessage: null });
    let [textState, setTextState] = useState('Hello for the text area');
    let [selectState, setSelectState] = useState('Volvo')

    function handleChange(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`You are submitting ${username}`)
    }

    function handleChangeAge(e) {
        if (!Number(e.target.value)) return setUserAge({ userAge: e.target.value, ErrorMessage: 'Age must be a number' });

        setUserAge(prev => ({ ...prev, userAge: e.target.value }));
    }

    function handleSelectState(e) {
        setSelectState(e.target.value);
    }

    return (
        <div>

            {username !== '' && userAge.userAge !== '' && <h1>Hello {username} {userAge.userAge}</h1>}
            <form>
                <label for='nameInput'>Enter Your Name:</label>
                <br />
                <input type='text' name='nameInput' onChange={(e) => handleChange(e)} />
                <input type='submit' value='submit' onClick={e => handleSubmit(e)} />
                <br />
                <label for='ageInput'>Enter Your Age:</label>
                <br />
                <input type='text' name='ageInput' onChange={(e) => handleChangeAge(e)} />
                {userAge.ErrorMessage && <p>{userAge.ErrorMessage}</p>}
            </form>

            <textarea value={textState}></textarea>



            <select value={selectState} onChange={e => handleSelectState(e)}>
                <option value='Volvo'>Volvo</option>
                <option value='Ford'>Ford</option>
                <option value='Fiat'>Fiat</option>
            </select>
        </div>

    )

}

export default Form;