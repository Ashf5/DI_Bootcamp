
function ProccessedForm(props) {

    return (
        <div>
            <h1>Entered Information:</h1>
            <p className='boldP'>Your First Name: {props.fname}</p>
            <p className='boldP'>Your Last Name: {props.lname}</p>
            <p className='boldP'>Your Age: {props.age}</p>
            <p className='boldP'>Your Gender: {props.gender}</p>
            <p className='boldP'>Your Destination: {props.destination}</p>
            <p className='boldP'>Your Dietary Restrictions:</p>
            <p>**Nuts free: {props.nutsFree}</p>
            <p>**Lactose free: {props.lactoseFree}</p>
            <p>**Vegan meal: {props.vegan}</p>
        </div>

    )
}

export default ProccessedForm;