
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const celebrities = [
    {
      title: 'Bob Dylan',
      imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      description:
        'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    },
    {
      title: 'McCartney',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
      description:
        'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
    },
  ]
  const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
  return (
    <div>
      {celebrities.map(
        (item,i ) => <BootstrapCard key={i} title={item.title} imgUrl={item.imageUrl} bLabel={item.buttonLabel} bUrl={item.buttonUrl} description={item.description} />
      )}

      <ul className='list-group'>
        {planets.map((planet, i) => <li key={i} className='list-group-item'>{planet}</li>)}
      </ul>
    </div>
  );


}

function BootstrapCard(props) {
  return(
  <div className="card m-5" style={{ width: '30rem' }}>
    <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href={props.bUrl} class="btn btn-primary">{props.bLabel}</a>
    </div>
  </div>
  )
}

export default App;
