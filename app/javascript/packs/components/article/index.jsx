import React from 'react'
import ReactDOM from 'react-dom'
import Album from "../Album"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Album />,
    document.body.appendChild(document.createElement('div')),
  )
})
