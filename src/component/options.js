import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import "./style.css"

export default class Options extends Component {
  render(){
    const {questions} = this.props;
    const option = questions.variant.map(text =>
      <option> {text} </option>
    );

    return( 
      <Form.Group>
         <Form.Label><h3>{questions.text}</h3></Form.Label>

        <Form.Text className="text-muted">
          {questions.textMuted}
        </Form.Text>

        <div className="option">
            <Form.Control as="select">
              {option}
            </Form.Control>
        </div>
      </Form.Group>
    );
  }
}