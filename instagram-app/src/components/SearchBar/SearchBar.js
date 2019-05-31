import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: this.props.newData,
            searchUsername: ''
        }
    }

    // componentDidMount() {
    //     this.setState({ newData: dummyData})
    
    //   }

    changeHandler = event => {
        console.log(event.target.value); //Target value
        this.setState({ searchUsername: event.target.value });
      };

    updateSearch = e => {
        e.preventDefault();
        this.props.searchPosts(this.state.searchUsername)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.updateSearch}>
                    <input 
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Search"
                    value={this.state.searchUsername}
                    name="searchUsername"
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
