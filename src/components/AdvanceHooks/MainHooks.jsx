// import { useState } from "react";

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
















// function GoalForm(props) {
//   const [formData, setFormData] = useState({
//     goal: "",
//     by: "",
//   });

//   const handelChenge = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     props.onAdd(formData);
//     setFormData({ goal: "", by: "" });
//   };

//   console.log(formData);
//   return (
//     <>
//       <h2>Set Goal</h2>
//       <form onSubmit={handelSubmit}>
//         <input
//           type="text"
//           name="goal"
//           id=""
//           onChange={handelChenge}
//           placeholder="Goal"
//         />

//         <input
//           type="text"
//           name="by"
//           id=""
//           onChange={handelChenge}
//           placeholder="By"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// function ListOFGoals(props) {
//   return (
//     <>
//       <ul>
//         {props.allGoals.map((g) => (
//           <li key={g.goal}>
//             Goal: {g.goal} by {g.by}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default function MainHooks() {
//   const [allGoals, updateAllGoals] = useState([]);
//   function addGoals(goal) {
//     updateAllGoals([...allGoals, goal]);
//   }
//   return (
//     <div>
//       <GoalForm onAdd={addGoals} />
//       <ListOFGoals allGoals={allGoals} />
//     </div>
//   );
// }
