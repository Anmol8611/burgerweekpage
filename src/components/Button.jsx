import React from 'react'

const Button = (props) => {
  return (
    <button style={{
        backgroundColor: props.color,
        padding: '15px 40px',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
    }}>
        {props.text}
    </button>
  )
}

export default Button