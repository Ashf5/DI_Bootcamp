

function UserForm() {
    return (
        <form>
            <input type="text" placeholder="name" name='name' /><br />
            <input type="email" placeholder="email" name="email" /><br />
            <input type="phone" placeholder="phone" name="phone" /><br />
            <input type="submit" value='Create Account' /><br />
        </form>
    )
}

export default UserForm;