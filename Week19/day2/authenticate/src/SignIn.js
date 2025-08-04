import { useDispatch } from "react-redux";
import { loginUser } from "./features/auth/authSlice";

function SignIn() {

    let dispatch = useDispatch();
    return (
        <div>
            <h3>Not signed in</h3>
            <form>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="email" name="email" placeholder="Enter Email" />
                <input type="submit" value='Sign In' onClick={(e) => {
                    e.preventDefault();
                    dispatch(loginUser({ name: e.target.form.username.value, email: e.target.form.email.value }));
                }} />
            </form>
        </div>

    )
}

export default SignIn;