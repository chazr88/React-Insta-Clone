import React from 'react';



const withAuthenticate = App =>
class extends React.Component {
    
    render() {
        return <App {...this.props} />
    }
}



export default withAuthenticate
