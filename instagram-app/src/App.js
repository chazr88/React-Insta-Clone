import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import Searchbar from "./components/SearchBar/SearchBar";


class App extends React.Component{
  constructor() {
    super();
    this.state = { 
      newData: []
    }
  }
  

  componentDidMount() {
    this.setState({ newData: dummyData})
    console.log(this.state.newData)
  }


  render(){
    return (
      <div className="App">
      
      <Searchbar />
      <PostContainer newData={this.state.newData} />
      </div>
    );
  }

}

export default App;
