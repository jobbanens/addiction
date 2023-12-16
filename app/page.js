'use client'
import Link from 'next/link'
import {useEffect} from "react";
export default function Home() {
  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      if (e.code === 'Digit1') location.assign('/quiz/');
      if (e.code === 'Digit2') location.assign('/quiz/');
      if (e.code === 'Digit3') location.assign('/quiz/');
    })
  }, []);

  return (
    <main className={'bg-purple'}>
      <div className={'container'}>
        <div className={'wrapper'}>
          <h1 className={'title'}>Your parenting skills influence how your kids (ab)use drugs...</h1>
          <p className={'info'}>Do the quiz to find out how</p>
        </div>
        <Link href={'/quiz'}>
          <button className={'color-purple'}>Press a button to start</button>
        </Link>
      </div>
    </main>
  )
    }
