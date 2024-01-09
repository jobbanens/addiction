"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";
import Link from "next/link";
import { useEffect } from "react";
export const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isChosen, setIsChosen] = useState(false);
  const [activeInfo, setActiveInfo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [displayAll, setDisplayAll] = useState(true);

  const { questions } = quiz;
  const { id, question, answers, info, correctAnswer } =
    questions[activeQuestion];

  useEffect(() => {
    function keyboardListener(e) {
      if (!isChosen) {
        if (e.code === "Digit1") {
          onSelect(0);
        } else if (e.code === "Digit2") {
          onSelect(1);
        } else if (e.code === "Digit3") {
          onSelect(2);
        }
      } else {
        onContinue();
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keyup", keyboardListener);
    }
    return () => window.removeEventListener("keyup", keyboardListener);
  }, [
    activeQuestion,
    isChosen,
    activeInfo,
    showResult,
    score,
    chosen,
    displayAll,
    questions,
    quiz,
    id,
    question,
    answers,
    info,
    correctAnswer,
  ]);

  const onSelect = (id) => {
    if (!isChosen) {
      setIsChosen(true);
      setChosen(id);
      setDisplayAll(false);
      setActiveInfo(id);
      // Make the not chosen options greyed out
      if (answers[id] === correctAnswer) {
        setScore(score + 1);
      }
      setShowResult(true);
    }
  };

  const onContinue = () => {
    if (isChosen) {
      setIsChosen(false);
      setChosen(null);
      if (activeQuestion + 1 !== questions.length) {
        setDisplayAll(true);
        setShowResult(false);
        setActiveQuestion(activeQuestion + 1);
      } else {
        if (typeof window !== "undefined") {
          if (score >= 6) {
            location.assign("/good-ending/");
          } else {
            location.assign("/bad-ending/");
          }
        }
      }
    }
  };

  return (
    <main>
      <div
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          position: "fixed",
          opacity: "0.9",
          backgroundImage: "url(" + "../images/" + id + ".png" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column"
        }}
      >
      <div style={{ height: "224px", width: "100%", backgroundColor: "rgba(250, 250, 250, 0.7)", boxShadow: "0 0 10px 0px rgba(0,0,0,.5)"}}></div>
      {showResult ? <div className="fadeIn" style={{ height: "371px", width: "100%", backgroundColor: "rgba(250, 250, 250, 0.7)", marginTop: "auto", boxShadow: "0 0 10px 0px rgba(0,0,0,.5)"}}></div> : ""}
      </div>
      <div className={"container"}>
        <div className={"wrapper"}>
          <h1 className="fadeIn" style={{ height: 128 + "px"}}>{question}</h1>
          <div className={"options"}>
            <div
              className={
                (chosen == 0) ? "option bg-yellow chosen" : ((displayAll) ? "option bg-yellow" : "fade option bg-yellow")
              }
              onClick={() => onSelect(0)}
            >
              <p className={"helper"}>A</p>
              <p className={"prompt"}>{answers[0]}</p>
            </div>
            <div
              className={
                (chosen == 1) ? "option bg-green chosen" : ((displayAll) ? "option bg-green" : "fade option bg-green")
              }
              onClick={() => onSelect(1)}
            >
              <p className={"helper"}>B</p>
              <p className={"prompt"}>{answers[1]}</p>
            </div>
            <div
              className={
                (chosen == 2) ? "option bg-blue chosen" : ((displayAll) ? "option bg-blue" : "fade option bg-blue")
              }
              onClick={() => onSelect(2)}
            >
              <p className={"helper"}>C</p>
              <p className={"prompt"}>{answers[2]}</p>
            </div>
          </div>
          {showResult ? <p className="info fadeIn" style={{ paddingTop: "30px"}}>{info[activeInfo]}</p> : ""}
        </div>
        {showResult ? (
          <Link href={"/quiz"}>
            <button className="fadeIn" onClick={() => onContinue()}>
              Press a button to continue
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default page;
