import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "./features/auth/authSlice";

function SignOut() {
    let username = useSelector(state => state.auth.user.name);
    let dispatch = useDispatch();
    return (
        <div>
            <h3>Hello, {username}</h3>
            <button onClick={() => dispatch(logoutUser())}>Log Out</button>
        </div>
    )
}

export default SignOut;