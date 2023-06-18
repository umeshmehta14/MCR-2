import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { useHabit } from "../../Context/HabitProvider";
import FormModal from "../FormModal/FormModal";

const HabitDetailModal = ({ showModal, setShowModal, habit }) => {
  const { setHabitDetail } = useHabit();
  const handleModalClose = () => setShowModal(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const { habitName, repeat, timeOfDay, startDay, goal } = habit;

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{habitName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Repeat:</strong> {repeat}
          </p>
          <p>
            <strong>Time of Day:</strong> {timeOfDay}
          </p>
          <p>
            <strong>Start Day:</strong> {startDay}
          </p>
          <p>
            <strong>Goal:</strong> {goal} Time Daily
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="icon-section">
            <BiEdit
              title="Edit"
              className="edit-icon"
              onClick={() => {
                setHabitDetail({ ...habit });
                setShow(!show);
              }}
            />
          </div>
        </Modal.Footer>
      </Modal>
      <FormModal
        show={show}
        handleShow={handleShow}
        setShow={setShow}
        edit={true}
      />
    </>
  );
};

export default HabitDetailModal;
