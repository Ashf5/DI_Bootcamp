import React from 'react';
import './Exercise.css';

class Exercise extends React.Component {

    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div>
                <h1 style={style_header}>This is a header</h1>
                <p className='para'>This is a paragraph</p>
                <a href='#'>This is a link</a>
                <form>
                    <input type='text' placeholder='name' />
                </form>
                <img src='/logo512.png' alt='logo' />
                <ul>
                    <li>coffee</li>
                    <li>tea</li>
                    <li>milk</li>
                </ul>
            </div>
        )
    }
}

export default Exercise;