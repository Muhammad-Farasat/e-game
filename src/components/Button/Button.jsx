import React from 'react'
import style from './Button.module.css'

function Button({btnName}) {
  return (
    <>  
        <button className={style.link}>
          <a href='' className= {style.read_more_btn}>
              {btnName}
          </a>
        </button>
    </>
  )
}

export default Button