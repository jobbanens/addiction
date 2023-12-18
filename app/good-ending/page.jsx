'use client'
import React, {useEffect, useState} from 'react'
import Link from "next/link";
export const page = () => {
  useEffect(() => {
    function keyboardListener(e){
        if (e.code === 'Digit1') location.assign('/');
        if (e.code === 'Digit2') location.assign('/');
        if (e.code === 'Digit3') location.assign('/');
    }
    window.addEventListener('keyup', keyboardListener)    
    return () => window.removeEventListener('keyup', keyboardListener)
  }, []);

  return (
      <main className={'bg-green'}>
        <div className={'container'}>
          <div className={'wrapper'}>
            <h1 className={'title'}>And the award for the best parent goes to...</h1>
            <p className={'info'}>YOU! If you are looking for more guidance on how to approach this topic with your children, check out https://www.helderopvoeden.nl/</p>
            <img style={{width: "200px", imageRendering: "pixelated"}} src='../images/qr.gif'></img>
          </div>
          <Link href={'/'}>
            <button className={'color-green'}>Press a button to end the quiz</button>
          </Link>
        </div>
      </main>
  )
}

export default page
