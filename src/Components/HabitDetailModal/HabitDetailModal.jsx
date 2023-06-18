import React from "react";
import { Modal } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { useHabit } from "../../Context/HabitProvider";

const HabitDetailModal = ({ showModal, setShowModal, habit }) => {
  const { setHabitDetail } = useHabit();
  const handleModalClose = () => setShowModal(false);

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
            <strong>Goal:</strong> {goal}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="icon-section">
            <BiEdit
              title="Edit"
              className="edit-icon"
              onClick={() => setHabitDetail({ ...habit })}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HabitDetailModal;
