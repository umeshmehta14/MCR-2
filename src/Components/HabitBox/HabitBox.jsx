import React, { useState } from "react";
import "./HabitBox.css";
import { useHabit } from "../../Context/HabitProvider";
import { BsArchive, BsTrash } from "react-icons/bs";
import HabitDetailModal from "../HabitDetailModal/HabitDetailModal";
import { useLocation } from "react-router-dom";

const HabitBox = ({ habit }) => {
  const { handleDelete, handleArchive } = useHabit();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  const { habitName, id } = habit;
  return (
    <>
      <div
        className="habit-box-container"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="icon-section">
          <BsTrash
            title="Delete"
            className="icon"
            onClick={() => handleDelete(id)}
          />
          {location.pathname === "/" && (
            <BsArchive
              title="Archive"
              className="icon"
              onClick={() => handleArchive(id)}
            />
          )}
        </div>
        <h1>{habitName}</h1>
      </div>
      {showModal && (
        <HabitDetailModal
          showModal={showModal}
          habit={habit}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default HabitBox;
