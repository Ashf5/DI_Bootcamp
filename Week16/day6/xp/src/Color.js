
import react from 'react';

class Color extends react.Component {
    constructor() {
        super();
        this.state = { favoriteColor: 'red', show: true };
    }

    componentDidMount() {
        this.setState({ favoriteColor: 'yellow' });
    }

    changeState = () => {
        this.setState({ favoriteColor: 'blue' })
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        console.log('after update')
    }

    getSnapshotBeforeUpdate() {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    deleteChild = () => {
        this.setState({ show: false });
    }

    render() {
        return (<div>
            <h2>My favorite color is {this.state.favoriteColor}</h2>
            <button onClick={this.changeState}>Change Color</button>

            <div>
                {this.state.show && <Child />}
                <button onClick={this.deleteChild}>Delete Header</button>
            </div>

        </div>)

    }
}

export class Child extends react.Component {


    componentWillUnmount() {
        alert('The component Header is about to be unmounted.')
    }

    render() {
        return (
            <div><h1>Hello World</h1></div>
        )
    }
}

export default Color;