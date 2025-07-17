
import './QuoteCard.css'

function QuoteCard({ quote, author, handleNext, color }) {
    return (
        <div className='mainDiv' style={{backgroundColor: color}}>
            <div className="card">
                <h3 style={{color: color}}>"{quote}"</h3>
                <div className='authorContainer'>
                    <p style={{color: color}}>-{author}-</p>
                    <button onClick={e => handleNext(e, quote)} style={{backgroundColor: color, color: 'white'}}>New Quote</button>
                </div>

            </div>
        </div>

    )
}

export default QuoteCard;