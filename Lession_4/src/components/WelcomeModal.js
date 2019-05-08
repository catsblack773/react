import React, { Component } from 'react';

class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: Boolean
        }
    }
    
    render() {
        let modal;
        if (this.state.isModal) {
            modal = <div className="modal">
                <div className="modal-line-top">
                    <span className="modal-line-top-txt">Приветствуем товарищи</span>
                    <span className="modal-close" onClick={() => {
                        this.setState({isModal: !this.state.isModal})
                    }}>X</span>
                </div>
                <p className="modal-txt">Если a равно нулю, то оно не пишется и запись сокращается до b. Если b равно нулю, то оно также не указывается и выражение записывается в форме an. a и b могут быть отрицательными числами, в этом случае знак плюс меняется на минус, например: 5n-1.</p>
            </div>
        }
        return <>
            {modal}
        </>
    }

    
  componentDidMount() {
    this.setState({
        isModal: true
    });
  }
}

export default WelcomeModal;