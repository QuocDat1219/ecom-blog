import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='containers'>
          <span className="text-[24px] pt-[30px]">{name}</span>
          <h1 className="text-[50px]">{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
