'use client'
import Link from 'next/link'
import {useEffect} from "react";
export default function Home() {
  useEffect(() => {
    
    function keyboardListener(e){
      if (e.code === 'Digit1') location.assign('/quiz/');
      if (e.code === 'Digit2') location.assign('/quiz/');
      if (e.code === 'Digit3') location.assign('/quiz/');
  }
  window.addEventListener('keyup', keyboardListener)    
  return () => window.removeEventListener('keyup', keyboardListener)
  }, []);

  return (
    <main className={'bg-purple'}>
      <div className={'container'}>
        <div className={'wrapper'}>
          <h1 className={'title'}>Your parenting skills influence how your child <a style={{opacity: 0.3}}>ab</a>uses drugs...</h1>
          <p className={'info'}>Take the quiz to find out how.</p>
        </div>
        <Link href={'/quiz'}>
          <button className={'color-purple'}>Press a button to start</button>
        </Link>
      </div>
    </main>
  )
    }
