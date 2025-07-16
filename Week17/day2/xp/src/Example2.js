
import data from './data2.json';
import { Component } from 'react';

class Example2 extends Component {
    render() {
        return (
            <div>
                {data.Skills.map((item, i) => <SkillSet key={i} area = {item.Area} skills= {item.SkillSet} />)}
            </div>
        )
    }

}

class SkillSet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>{this.props.area}</h3>
                <ul>
                    {this.props.skills.map((item, index) => <li key={index}>{item.Name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Example2;