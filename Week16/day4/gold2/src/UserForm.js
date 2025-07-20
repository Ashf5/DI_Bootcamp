
import './UserForm.css'
import { useState } from 'react';

function UserForm() {

    let [user, setUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        let fname = e.target.form.fname.value;
        let lname = e.target.form.lname.value;
        let phone = e.target.form.phone.value;
        let email = e.target.form.email.value;

        if (!fname || !lname || !phone || !email) {
            return;
        }

        setUser({fname, lname, phone, email});
    }

    function reset() {
        setUser({});
    }

    return (
        <div className='container'>
            { !user.fname ? (
                <form className='userForm'>
                <h1>Welcome!</h1>
                <h5>Please provide your information below.</h5>
                <input type='text' name='fname' placeholder="First Name"/>
                <br />
                <input type='text' name='lname' placeholder="Last Name" />
                <br />
                <input type='tel' name="phone" placeholder="Phone Number" />
                <br />
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="submit" onClick={e => handleSubmit(e)}/>
            </form>) : 
            (
                <div>
                    <h4>{user.lname}, {user.fname}</h4>
                    <h4>{user.phone}|{user.email}</h4>
                    <button onClick={reset}>Reset</button>
                </div>
            )
            }
            
        </div>
    )
}

export default UserForm;