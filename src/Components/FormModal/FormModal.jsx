import React from "react";
import { Modal } from "react-bootstrap";
import HabitForm from "..//HabitForm/HabitForm";

const FormModal = ({ show, setShow, edit }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} variant="dark">
        <Modal.Header closeButton>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HabitForm handleClose={handleClose} edit={edit} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormModal;
