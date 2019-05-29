import React, { Component } from 'react';
import Searchbar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer"

class PostsPage extends Component {
    render() {
        return (
            <div>
                <Searchbar newData={this.props.newData} searchPosts={this.searchPosts}/>
                <PostContainer newData={this.props.newData} />
            </div>
        )
    }
}

export default PostsPage
