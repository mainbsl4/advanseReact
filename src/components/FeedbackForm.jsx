import { useState } from "react";

export default function FeedbackForm() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handelChenge = (e) => {
    setScore(e.target.value);
    setComment(e.target.value);
  };

  console.log(score);
  console.log(comment);
  return (
    <form>
      <div>
        <label htmlFor="score">Score {score}</label>
        <input
          type="range"
          name="score"
          id="score"
          min="0"
          max="10"
          value={score}
          onChange={handelChenge}
        />
      </div>
      <div>
        <label htmlFor="comment">Your comment</label>
        <textarea className=" border" name="comment" id="comment" cols="30" rows="2" onChange={handelChenge}></textarea>
      </div>
      <button typeof="submit">Submit</button>
    </form>
  );
}
