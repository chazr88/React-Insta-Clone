import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments,
            id: null, 
            username: "", 
            text: ""

        }
    }

    changeHandler = event => {
        console.log(event.target.value); //Target value
        this.setState({ text: event.target.value });
      };
    
    addNewComment = (e) => {
        console.log("clicked")
       
        e.preventDefault();
        this.setState({ 
            comments: [...this.state.comments, {username: 'ChazR', text: this.state.text}] 
                        
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.username}</p>
                        <p>{comment.text} </p>
                    </div>
                ))}
                <form onSubmit={this.addNewComment}>
                    <input 
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Add a comment..." 
                    value={this.state.text}
                    name="text"
                    />
                </form>
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
