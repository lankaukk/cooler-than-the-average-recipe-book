import React from 'react';

class Likes extends React.Component {
    state = {
        count: 0
    }

    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementMe}>
                    {this.state.count} Likes❤️
                </button>
            </div>
        )
    }
}

export default Likes