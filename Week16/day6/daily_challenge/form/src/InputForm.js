
import './Form.css'
function Form(props) {
    return (
        <form className='form' onChange={(e) => props.change(e)}>
            <TextInput placeholder='First Name' name='fname' />
            <TextInput placeholder='Last Name' name='lname' />
            <TextInput placeholder='Age' name='age' />
            
            <label><input type='radio' name='gender' value='male'/>Male</label>
            <label><input type='radio' name='gender' value='female'/>Female</label>

            <label for='destination'><b>Select Your destination</b></label>
            <select name='destination'>
                <option value=''>--Choose Destination--</option>
                <option value='Israel'>Israel</option>
                <option value='Japan'>Japan</option>
                <option value='Kurdistan'>Kurdistan</option>
            </select>

            <label for='restrictions'><b>Dietary Restrictions:</b></label>
            <label><input type='checkbox' name='restrictions' value='nutsFree'/>Nut Free</label>
            <label><input type='checkbox' name='restrictions' value='lactoseFree' />Lactose Free</label>
            <label><input type='checkbox' name='restrictions' value='vegan' />Vegan</label>

            <input type='submit' value='submit'/>
            
        </form>
    )
}

function TextInput(props) {
    return (
        <input type='text' placeholder={props.placeholder} name={props.name} />
    )
}


export default Form;