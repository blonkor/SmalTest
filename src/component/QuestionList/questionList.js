import React, { Component } from 'react';
import Question from '../question';
import './list.css';
import answers from '../../info/answers';
import Modal from '../modalWindow';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Options from '../options';

class QuestionList extends Component {
  state = {
    nextWindow: false,
    modalWindow: false,
    answers: undefined
  }
  render() {
    if(!this.props.page){return null;}   

    const selectList = this.props.selectList.map(question =>
      <Options questions={question}/>
      );

    const list = this.props.list.map(question =>
      <Question questions={question}/>
    ); 

    return (
      <Jumbotron className="jumbo">
          <h1>Небольшой тест на знание географии:)</h1>
          <ListGroup.Item className="questions" >
            {selectList}
            {list}
          </ListGroup.Item>       
          
            <Modal
              vision={this.state.modalWindow}
              visionModal={this.visionModal}
              okButton={this.modalOk}
            />
            
          <div className="button">
            <Button className="bottomButton" variant="primary" onClick={this.clickButton}> Ответить </Button>
            <Button className="bottomButton" variant="secondary" onClick={this.Clean}> Очистить </Button>
          </div>
      </Jumbotron>
    );
  }
  Clean = () => {
    window.location.reload(true);
  }
  visionModal = () => {
    this.setState({modalWindow:!this.state.modalWindow});
  }

  modalOk = () =>{
    this.editResult(this.state.answers);
  }

  editResult = (inputAnswers) => {
    let count = 0, result = 0;
    inputAnswers.map((inp) => {
      if(answers[inp]){
        count++;
        result += answers[inp]}
      }
    );

    this.props.result(result, count);
    this.props.nextPage();

  }

  clickButton = () => {
    let arr = Array.prototype.slice.call(document.getElementsByTagName("input"));

    let inputAnswers = arr.filter((answ) => answ.checked);
    inputAnswers = inputAnswers.map(answ => answ.value);

    let n = Array.prototype.slice.call(document.getElementsByTagName("select"));
    let buffer = n.filter(answ => answ.value !== "");
    buffer.map(answ => inputAnswers.push(answ.value));

    let openQuestion = document.getElementById("openQuestion");

    if(openQuestion.value !== ""){
      inputAnswers.push(openQuestion.value.toLowerCase());
    }
    
    this.setState({answers: inputAnswers});

    if(inputAnswers.length < this.props.allAnswer){
      this.visionModal();
    } else {
      this.editResult(inputAnswers);
    } 
  }
}

export default QuestionList;