import React, { useState } from "react";

import "./Home.css";
import FormModal from "../../Components/FormModal/FormModal";
import { useHabit } from "../../Context/HabitProvider";
import HabitBox from "../../Components/HabitBox/HabitBox";
import { Button } from "react-bootstrap";

const Home = () => {
  const { habits } = useHabit();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const userHabit = habits.filter(({ archive }) => !archive);
  return (
    <div className="home-container">
      <Button variant="primary" onClick={handleShow}>
        Create New
      </Button>
      <FormModal handleShow={handleShow} show={show} setShow={setShow} />
      <div className="habit-main-box">
        {userHabit.length === 0
          ? "No habits"
          : userHabit?.map((habit) => (
              <HabitBox key={habit.id} habit={habit} />
            ))}
      </div>
    </div>
  );
};

export default Home;
