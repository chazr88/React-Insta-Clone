import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

class PostContainer extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="PostContainer">
                
                {this.props.newData && this.props.newData.map((data, index) => (
                    <div className="posts" key={data.username}>
                        <div className="post-user">
                            <img className="user-icon" src={data.thumbnailUrl} alt="img"/>
                            <p><strong>{data.username}</strong></p>
                        </div>
                        <img className="post-img" src={data.imageUrl} alt="img"/>
                        <CommentSection index={index} comments={data.comments}/>
                    </div>
                
                ))}
                
            </div>
        )
    }
}

PostContainer.propTypes = {
    newData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string
        })
    )
}

export default PostContainer
