import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import { useContext } from 'react';
import { foodwrapper } from '../../App';

const Backdrop = () => {
  const { hideCartHandler } = useContext(foodwrapper)

  return <div className={classes.backdrop} onClick={hideCartHandler} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => {
  const { hideCartHandler } = useContext(foodwrapper)

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={hideCartHandler} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
