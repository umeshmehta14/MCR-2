import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import HabitForm from "..//HabitForm/HabitForm";

const FormModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} variant="dark">
        <Modal.Header closeButton>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HabitForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormModal;
