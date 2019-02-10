import React, { Component } from 'react';
import './App.css';
import list from './info/allInfo'
import selectList from './info/selectinfo'
import QuestionList from './component/QuestionList/questionList'
import ResultList from './component/ResultList/resultList'

class App extends Component {
  state = {
    page: true,
    info: {
      result: 0,
      trueAnswers: 0,
      allAnswer: 7
    }
  }
  nextPage = () => {
    this.setState({page:!this.state.page})
    
  }
  result = (newValue, trueAnswer) => {
    let a = this.state.info;
     a.result = newValue;
     a.trueAnswers=trueAnswer;
    this.setState({info:a});}

  render() {
    return (
      <div className="App">
        <QuestionList 
          page={this.state.page}
          list={list}
          selectList={selectList}
          nextPage={this.nextPage}
          result={this.result}
          allAnswer={this.state.info.allAnswer}
        />
        <ResultList
          page={this.state.page}
          info={this.state.info}
        />
      </div>
    );
  }
  
}

export default App;
