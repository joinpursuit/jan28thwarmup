import React from 'react';

export const DisplayPokemon = ({abilities, base_experience}) => {
  // if(!abilities) return null
   abilities = abilities.map(ability => {
    return <li>{ability.ability.name }</li>
  })
  return(
    <div>
      <div>Base Experience: {base_experience}</div>
      <ul>
        {abilities}
      </ul>
    </div>
  )
}
