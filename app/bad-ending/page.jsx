'use client'
import React, {useEffect, useState} from 'react'
import Link from "next/link";
export const page = () => {
  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      if (e.code === 'Digit1') location.assign('/');
      if (e.code === 'Digit2') location.assign('/');
      if (e.code === 'Digit3') location.assign('/');
    })
  }, []);

  return (
      <main className={'bg-red'}>
        <div className={'container'}>
          <div className={'wrapper'}>
            <h1 className={'title'}>Timo becomes the headline of the newspaper that morning.</h1>
            <p className={'info'}>Try to understand your child better without any judgement.</p>
          </div>
          <Link href={'/'}>
            <button className={'color-red'}>Press a button to end the quiz</button>
          </Link>
        </div>
      </main>
  )
}

export default page
