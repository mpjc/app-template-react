import React, { Component } from 'react';
import './Modal.scss';

interface ModalProps {
  showClose: boolean;
  closeOnBgClick: boolean;
  close(): void;
}

class Modal extends Component<ModalProps> {
  bgRef = React.createRef<HTMLDivElement>();

  tryClose = (e: React.MouseEvent) => {
    if (this.props.closeOnBgClick && e.target == this.bgRef.current) {
      this.props.close();
    }
  }

  render() {
    const { close, children, showClose } = this.props;
    return (
      <div className="Modal-background" onClick={this.tryClose} ref={this.bgRef}>
        <div className="Modal-wrapper">
          <div className="Modal-container">
            {showClose &&
              <div className="Modal-close" onClick={close}>
                <i className="fas fa-times fa-lg"></i>
              </div>
            }
            <div className="Modal-header">{(children as any)[0]}</div>
            <div className="Modal-content">{(children as any)[1]}</div>
          </div>
        </div >
      </div >
    );
  }
}

export default Modal;