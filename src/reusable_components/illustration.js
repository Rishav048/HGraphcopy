import React from 'react'
import loginLeft from '../assets/images/illustration-login-left.svg'
import loginRight from '../assets/images/illustration-login-right.svg'

export default function Illustration() {
  return (
    <>
    <div className="group-left1">
    <img src={loginLeft} alt="" />
  </div>
  <div className="group-right1">
    {" "}
    <img src={loginRight} alt="" />
  </div>
  </>
  )
}
