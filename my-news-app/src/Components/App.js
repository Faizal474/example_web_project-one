import { Component } from 'react';
import './App.css';
import News from './News';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      news1:{
        category:'top-headlines',
        query: 'sources=techcrunch'
      },
      news2:{
        category:'everything',
        query: 'q=tesla&from=2025-03-23&sortBy=publishedAt'
      },
      news3:{
        category:'everything',
        query:'domains=wsj.com'
      }
    }
  }
  render(){
    return(
      <div className='App'>
        <News news={this.state.news1}/>
        <hr/>
        <News news={this.state.news2}/>
        <hr/>
        <News news={this.state.news3}/>
      </div>
    )
  }
}



export default App;
