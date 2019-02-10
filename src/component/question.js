import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import './style.css';

export default class Questions extends Component {
  render(){
    const {questions} = this.props;
    const whatHeppen = questions.align;

    const inputs = questions.variant.map(text =>
      <div>
        {whatHeppen ?
            <div> 
              <Form.Check name={questions.id} type={questions.type} label={text} value={text} className="inputCheck"/>
            </div>
            :
            <div> 
              <h5>{text}</h5>
              <Form.Check type="input" id="openQuestion"/>
            </div>
        }
      </div>
    );
    return( 
      <Form.Group>
        <Form.Label><h3>{questions.text}</h3></Form.Label>

        <Form.Text className="text-muted">
          {questions.textMuted}
        </Form.Text>
      
        <div className="quest">
          {inputs}
        </div>
      </Form.Group>
    );
  }
}