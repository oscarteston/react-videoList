import React, { Component } from 'react';

// const searchBar = () => {
//     return <input />;
// }

class searchBar extends Component {
    
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        let term = event.target.value;

        this.setState(prevState => ({term}));

        this.props.onSearchTermChange(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default searchBar;