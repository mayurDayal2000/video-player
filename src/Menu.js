import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.tagName === 'INPUT') {
            this.props.choose(e.target.value);
        }
    }

    render() {
        return (
            <form onClick={this.handleClick}>
                <label>
                    <input type="radio" name="src" value="naruto" />
                    Naruto Shippuden
                </label>

                <label>
                    <input type="radio" name="src" value="tanjiro" />
                    Demon Slayer
                </label>

                <label>
                    <input type="radio" name="src" value="eren" />
                    Attack on Titan
                </label>
            </form>
        )
    }
}

export default Menu;