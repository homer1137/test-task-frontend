import React from "react";
import {useParams, Link} from 'react-router-dom';
import "./Modal.css";

function Modal({ setOpenModal}) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Оплата прошла</h1>
        </div>
        <div className="body">
          <p>Спасибо что пользуйтесь нашими услугами</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Хорошо
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;