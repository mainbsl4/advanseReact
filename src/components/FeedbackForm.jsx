import { useState } from "react";

export default function FeedbackForm() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  // const handelChenge = (e) => {
  //   setScore(e.target.value);
  //   setComment(e.target.value);
  // };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provite a comment explain why th eexpreience was poor.");
      return;
    }
    setScore("10");
    setComment("");
    console.log(score);
    console.log(comment);
  };

  // console.log(score);
  // console.log(comment);
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="score">Score {score}</label>
        <input
          type="range"
          name="score"
          id="score"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Your comment</label>
        <textarea
          className=" border"
          name="comment"
          id="comment"
          cols="30"
          rows="2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" disabled={score === "0"}>
        Submit
      </button>
    </form>
  );
}
