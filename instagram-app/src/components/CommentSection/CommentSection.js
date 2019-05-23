import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CommentSection extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => (
                    <div>
                        <p>{comment.username}</p>
                        <p>{comment.text} </p>
                    </div>
 
                ))}
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
            test: PropTypes.string,
        })
    )
}

export default CommentSection
