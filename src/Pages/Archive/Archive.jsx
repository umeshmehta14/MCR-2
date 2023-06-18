import React from "react";
import "./Archive.css";
import { useHabit } from "../../Context/HabitProvider";
import HabitBox from "../../Components/HabitBox/HabitBox";

const Archive = () => {
  const { habits } = useHabit();
  const archivedHabits = habits.filter(({ archive }) => archive);
  return (
    <div className="home-container">
      <div className="habit-main-box">
        {archivedHabits.length === 0
          ? "No Archived"
          : archivedHabits.map((habit) => (
              <HabitBox key={habit.id} habit={habit} />
            ))}
      </div>
    </div>
  );
};

export default Archive;
