import React from 'react';
import '../index.css';

export default class Button extends React.Component {
    render() {
        const { text, count, onClick } = this.props;

        return (
            <p class='button' onClick={onClick} text={count+1}>
                {text}
            </p>)
    }
}