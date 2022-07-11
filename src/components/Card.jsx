import React, {useState, useEffect} from 'react'
import "../styles/Cards.css"

const Card = ({character, handleClick, handleRemove}) => {

  return (
    <div className='card'>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.type}</p>
        <p>{character.location.name}</p>
        {
          handleClick ?
          <button type='button' onClick={()=>{handleClick(character)}}>Add to Favorite</button>
          :
          <></>
        }
        {
          handleRemove ?
          <button type='button' onClick={()=>{handleRemove(character)}}>Quit to Favorite</button>
          :
          <></>
        }
    </div>
  )
}

export default Card