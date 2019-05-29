import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import withAuthenticate from "./authentication/withAuthenticate";
import PostPage from "./components/PostContainer/PostsPage";


const ComponentFromWithAuthenticate =  withAuthenticate(PostPage);

class App extends React.Component{
  constructor() {
    super();
    this.state = { 
      newData: [],
    }
  }

  componentDidMount() {
    this.setState({ newData: dummyData})
  }

  searchPosts = (username) => {
    this.setState({newData: [...this.state.newData.filter(data => data.username === username)]})
  }

  render(){
    
    console.log(withAuthenticate)
    return (

      <div className="App">

      <ComponentFromWithAuthenticate searchPosts={this.searchPosts} test="test" newData={this.state.newData} />
      </div>
    );
  }

}

export default App;
