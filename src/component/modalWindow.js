import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ModalWindow extends Component {
  render(){
    const {vision, okButton} = this.props;

    if(!vision){return null;}

    return(    
      <>
        <Modal show={vision} onHide={this.props.visionModal}>
          <Modal.Header closeButton>
            <Modal.Title>Проверьте свои ответы</Modal.Title>
          </Modal.Header>
          <Modal.Body>Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.visionModal}>
              Нет
            </Button>
            <Button variant="primary" onClick={okButton}>
              Да
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalWindow;

