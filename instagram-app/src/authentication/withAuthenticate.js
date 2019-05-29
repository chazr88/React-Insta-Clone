import React from 'react';



const withAuthenticate = App =>
class extends React.Component {
    
    render() {
        console.log(this.searchPosts)
        return <App {...this.props} searchPosts={this.searchPosts} />
    }
}



export default withAuthenticate
