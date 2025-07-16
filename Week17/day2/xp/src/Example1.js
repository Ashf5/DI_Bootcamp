import data from './data2.json';
import { Component } from 'react';


class Example1 extends Component {

    render() {
        return (
            <ul>
                {data.SocialMedias.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
    
}

export default Example1;