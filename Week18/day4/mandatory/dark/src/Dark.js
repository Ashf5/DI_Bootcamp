import { useTheme } from "./ThemeContext";
import UserForm from "./UserForm";



function Dark() {
    const {theme, changeTheme} = useTheme();

    

    return (
        <div className={theme}>
            <UserForm />
            <button onClick={changeTheme}>Change to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
        
    )
}

export default Dark;