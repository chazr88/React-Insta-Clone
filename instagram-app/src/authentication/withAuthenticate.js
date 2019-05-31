import React from 'react';



const withAuthenticate = PostsPage => LoginPage => 
class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        this.correctCreds() 
      }

    correctCreds() {
        const userUsername = localStorage.getItem('username');
        const userPassword = localStorage.getItem('password');
        if(userUsername === "Dethrowe" && userPassword === "12345"){
          this.setState ({
            loggedIn: true
          })
        }
      }


    render() {
        if(this.state.loggedIn === true) {
            return <PostsPage {...this.props}  searchPosts={this.props.searchPosts}/>
        } else {
            return <LoginPage/>
        }
        
    }
}



export default withAuthenticate
