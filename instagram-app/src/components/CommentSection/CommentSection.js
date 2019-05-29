import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./CommentSection.css"

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: this.props.comments,
            id: null, 
            username: "", 
            text: "",
            likes: 0

        }
    }

    // componentDidMount() {
    //     const state = JSON.parse(window.localStorage.getItem('saved_state'));

    //     if(state) {
    //         this.state.comments.loadState(state)
    //     }
    // }

    // componentDidUpdate() {
    //     const state = {
    //         comments: this.state.comments
    //     }

    //     window.localStorage.setItem('saved_state', JSON.stringify(state))
    // }

    incrementLikes= (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return{likes: prevState.likes + 1}
        })
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
                <div className="likes-comments">
                <i onClick={this.incrementLikes} className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                </div>
                <p>{this.state.likes}</p>
                {this.state.comments.map((comment, index) => (
                    <div key={index}>

                        <p><strong>{comment.username}</strong></p>
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
