import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
    render() {
        return (
            <div>
                {this.props.dummyData.map(data => (
                    <div key={data.username}>
                    <img src={data.thumbnailUrl} alt="img"/>
                    <p>{data.username}</p>
                    <CommentSection comments={data.comments}/>
                    </div>
                
                ))}
                
            </div>
        )
    }
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string
        })
    )
}

export default PostContainer
