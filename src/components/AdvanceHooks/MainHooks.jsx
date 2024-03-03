import { useState } from "react";

function GoalForm(props) {
  const [formDate, setFormDate] = useState({
    goal: "",
    by: "",
  });

  const handleChange = (e) => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(formDate);
    setFormDate({ goal: "", by: "" });
  };

  console.log(formDate);
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={handleSubmit }>
        <input
          type="text"
          name="goal"
          id=""
          placeholder="Goal"
          value={formDate.goal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="by"
          id=""
          placeholder="By"
          value={formDate.by}
          onChange={handleChange}
        />
        <button type="submit">Submit Goal</button>
      </form>
    </>
  );
}



function ListOfGoals (props){
  return(
    <>
    <ul>
      {
        props.allGoals.map((g)=>(
          <li key={g.goal}>
            <span>My goal is to {g.goal}, by {g.by}</span>
          </li>
        ))
      }
    </ul>
    </>
  )
}



export default function MainHooks() {
  const [allGoals, updateAllGoals] = useState([]);
  function addGoal (goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <>
      <GoalForm  onAdd= {addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </>
  );
}
