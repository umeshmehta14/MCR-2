import React from "react";
import "./HabitForm.css";
import { useHabit } from "../../Context/HabitProvider";
import { Button, Modal } from "react-bootstrap";

const HabitForm = ({ handleClose, edit }) => {
  const {
    habitDetail,
    setHabitDetail,
    handleNewHabit,
    handleEdit,
    setHabitEmpty,
  } = useHabit();

  const { id, habitName, repeat, timeOfDay, startDay, goal } = habitDetail;

  const repeatData = ["Daily", "Weekly", "Monthly"];
  const timeOfDayData = ["Any Time", "Morning", "Evening", "Night"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      handleEdit(habitDetail);
    } else {
      handleNewHabit(habitDetail);
    }
    setHabitEmpty();
    handleClose();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="select-inp">
        <label htmlFor="habit-name">Habit Name:</label>
        <input
          type="text"
          id="habit-name"
          placeholder="Habit Name"
          value={habitName}
          onChange={(e) =>
            setHabitDetail({ ...habitDetail, habitName: e.target.value })
          }
          required
        />
      </div>
      <div className="input-detail-container">
        <div className="select-inp">
          <label htmlFor="repeat-id">Repeat:</label>
          <select
            value={repeat}
            onChange={(e) =>
              setHabitDetail({ ...habitDetail, repeat: e.target.value })
            }
            id="repeat-id"
            required
          >
            {repeatData.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="select-inp">
          <label htmlFor="goal-id">Goal:</label>
          <select
            id="goal-id"
            value={goal}
            onChange={(e) =>
              setHabitDetail({
                ...habitDetail,
                goal: e.target.value,
              })
            }
            required
          >
            {repeatData.map((value, i) => (
              <option value={i + 1}>{i + 1} Time Daily</option>
            ))}
          </select>
        </div>

        <div className="select-inp">
          <label htmlFor="timeofday">Time of Day:</label>
          <select
            id="timeofday"
            value={timeOfDay}
            onChange={(e) =>
              setHabitDetail({ ...habitDetail, timeOfDay: e.target.value })
            }
            required
          >
            {timeOfDayData.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="select-inp">
          <label htmlFor="date">Start Day:</label>
          <input
            type="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            value={startDay}
            onChange={(e) =>
              setHabitDetail({ ...habitDetail, startDay: e.target.value })
            }
            required
          />
        </div>
      </div>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setHabitEmpty();
            handleClose();
          }}
        >
          Discard
        </Button>
        <Button type="submit" variant="primary">
          {edit ? "Save Changes" : "Save"}
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default HabitForm;
