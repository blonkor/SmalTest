import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './result.css'



export default class ResultList extends Component {
 
  render() {
    const {page, info} = this.props;
    if(page){return null;}
    
   
    return (
      <div>
        {info.result < 4 ?
          <Jumbotron className="result">
            <h3>Сожалеем:(</h3>
            <p>Ваш результат : {info.result}</p>
            <p>Вы ответили на {info.trueAnswers} из {info.allAnswer}</p>
          </Jumbotron>
          :
          <div>
            {info.result < 9 ?
              <Jumbotron className="result">
                <h3>Неплохо, но стоит подучить.</h3>
                <p>Ваш результат : {info.result}</p>
                <p>Вы ответили на {info.trueAnswers} из {info.allAnswer}</p>
              </Jumbotron>
            :
              <Jumbotron className="result">
                <h3>Где же таких гениев выращивают?:)</h3>
                <p>Поздравляем ваш результат : {info.result}</p>
                <p>Вы ответили на {info.trueAnswers} из {info.allAnswer}</p>
              </Jumbotron>
            }
          </div>
        }
    </div>
    );
  }
}