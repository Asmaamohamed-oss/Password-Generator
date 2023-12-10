import React from 'react'

export default function Button({text,onClick,customClass}) {
  return (
    <button className={customClass} onClick={onClick}>
        {text}
    </button>
  )
}
