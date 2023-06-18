import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const habitDetailInitialState = {
    habitName: "",
    repeat: "Daily",
    goal: "1",
    timeOfDay: "Any Time",
    startDay: "",
  };
  const [habits, setHabits] = useState([]);
  const [habitDetail, setHabitDetail] = useState(habitDetailInitialState);

  const handleNewHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, id: uuidv4() }]);
  };

  const handleDelete = (habitId) => {
    const updatedHabits = habits.filter(({ id }) => id !== habitId);
    setHabits(updatedHabits);
  };

  const handleArchive = (habitId) => {
    const archivedHabits = habits.map((habit) =>
      habit.id === habitId ? { ...habit, archive: true } : habit
    );
    setHabits(archivedHabits);
  };

  const handleEdit = (newHabit) => {
    const EditedHabits = habits.map((habit) =>
      habit.id === newHabit.id ? { ...habit, ...newHabit } : habit
    );
    setHabits(EditedHabits);
  };

  const setHabitEmpty = () => {
    setHabitDetail(habitDetailInitialState);
  };

  console.log(habits);
  return (
    <HabitContext.Provider
      value={{
        habits,
        habitDetail,
        setHabitDetail,
        handleNewHabit,
        setHabitEmpty,
        handleDelete,
        handleArchive,
        handleEdit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
