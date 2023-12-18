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
      <main className={'bg-red'}>
        <div className={'container'}>
          <div className={'wrapper'}>
            <h1 className={'title'} style={{fontSize: "60px"}}>Your child became the headline of the next morning's local newspaper.</h1>
            <p className={'info'}>For guidance on how you could have avoided this, check out https://www.helderopvoeden.nl/</p>
            <img style={{width: "200px", imageRendering: "pixelated"}} src='../images/qr.gif'></img>
          </div>
          <Link href={'/'}>
            <button className={'color-red'}>Press a button to end the quiz</button>
          </Link>
        </div>
      </main>
  )
}

export default page
