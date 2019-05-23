import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import Searchbar from "./components/SearchBar/SearchBar";


class App extends React.Component{
  render(){
    return (
      <div className="App">
      <Searchbar />
      <PostContainer dummyData={dummyData} />
      </div>
    );
  }

}

export default App;
