
import './App.css'

function Choice({language, onVote}) {
    return (
        <div className="optionDiv">
            <h3>{language.votes}</h3>
            <h3>{language.name}</h3>
            <button onClick={() => onVote(language.name)}>Click Here</button>
        </div>
    )
}

export default Choice;