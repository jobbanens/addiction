'use client'
import React, { useState } from 'react'
import { quiz } from '../data.js'
import Link from 'next/link'
import {useEffect} from "react";
export const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [isChosen, setIsChosen] = useState(false)
  const [activeInfo, setActiveInfo] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [displayAll, setDisplayAll] = useState(true)

  const {questions} = quiz;
  const {id, question, answers, info, correctAnswer} = questions[activeQuestion];

  if (typeof window !== "undefined") {
    window.addEventListener('keypress', (e) => {
      if (!isChosen) {
        if (e.code === "Digit1") {
          onSelect(0)
        } else if (e.code === "Digit2") {
          onSelect(1)
        } else if (e.code === "Digit3") {
          onSelect(2)
        }
      } else {
        onContinue()
      }
    })
  }

  const onSelect = ((id)=> {
    if(!isChosen) {
      setIsChosen(true)
      setChosen(id)
      setDisplayAll(false)
      setActiveInfo(id)
      // Make the not chosen options greyed out
      if (answers[id] === correctAnswer) {
        setScore(score + 1)
      }
      setShowResult(true)
    }
  })

  const onContinue = (() => {
    if (isChosen) {
      if (activeQuestion + 1 !== questions.length) {
        setDisplayAll(true)
        setIsChosen(false)
        setShowResult(false)
        setActiveQuestion(activeQuestion + 1)
      } else {
        if (typeof window !== "undefined") {
          if (score >= 6) {
            location.assign('/good-ending/')
          } else {
            location.assign('/bad-ending/')
          }
        }
      }
    }
  })

    return (
      <main>
        <div
        style={{
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          position: 'fixed',
          opacity: '0.33',
          backgroundImage: "url(" + "../images/" + id + ".png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
      </div>
  <div className={'container'}>
    <div className={'wrapper'}>
      <h1>{question}</h1>
      <p className={'info'}>What do you do?<br/>Press the corresponding button.</p>
      <div className={'options'}>
              <div className={chosen == 0 | displayAll ? 'option bg-yellow' : 'fade option bg-yellow'}
                   onClick={() => onSelect(0)}>
                <h2 className={'prompt'}>{answers[0]}</h2>
                <p className={'helper'}>Button A</p>
              </div>
              <div className={chosen == 1 | displayAll ? 'option bg-green' : 'fade option bg-green'}
                   onClick={() => onSelect(1)}>
                <h2 className={'prompt'}>{answers[1]}</h2>
                <p className={'helper'}>Button B</p>
              </div>
              <div className={chosen == 2 | displayAll ? 'option bg-blue' : 'fade option bg-blue'}
                   onClick={() => onSelect(2)}>
                <h2 className={'prompt'}>{answers[2]}</h2>
                <p className={'helper'}>Button C</p>
              </div>
            </div>
            {showResult ? (
              <p className={'info'}>{info[activeInfo]}</p>
            ) : ('')}
          </div>
          {showResult ? (
            <Link href={'/quiz'}>
              <button onClick={() => onContinue()}>Press a button to continue</button>
            </Link>
          ) : ('')}
        </div>
      </main>
    )
}

export default page
