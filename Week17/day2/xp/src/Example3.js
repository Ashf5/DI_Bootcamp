
import data from './data2.json';
import { Component } from 'react';

class Example3 extends Component {

    render() {
        return(
            <div>
                {data.Experiences.map((item, index) => <Experience key={index} image={item.logo} url={item.url} company={item.companyName} role={item.roles[0].title} start={item.roles[0].startDate} location={item.roles[0].location} description={item.roles[0].description}/>)}
            </div>
        )
    }
}

class Experience extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.image} alt='company logo' /> <br />
                <a href={this.props.url}>{this.props.company}</a>
                <p><b>{this.props.role}</b></p>
                <p>{this.props.start} {this.props.location}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Example3;