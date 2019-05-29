import React from 'react';



const withAuthenticate = App =>
class extends React.Component {


    render() {
        
        return <App {...this.props} searchPosts={this.props.searchPosts}/>
    }
}



export default withAuthenticate
