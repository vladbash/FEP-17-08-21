import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            seconds: 2 * 60 * 60,
            ticking: true
        };
    }

    componentDidMount() {
        setInterval(() => {
            const seconds = --this.state.seconds;
            this.setState({
                seconds,
                ticking: seconds >= 0
            });
        }, 1000);
    }


    render() {
        return (
            <div>
                {this.state.seconds} seconds
            </div>
        );
    }
}

export default Timer;