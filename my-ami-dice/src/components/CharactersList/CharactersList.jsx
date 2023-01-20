import React from 'react';
import CharacterModal from '../CharacterModal/CharacterModal';
import './style.scss';

const characters = [
  {
    name: "character1",
    id: 1
  },
  {
    name: "character2",
    id: 2
  },
  {
    name: "character3",
    id: 3
  }
]

function CharactersList() {
  return (
    <div className='characters-container'>
        <div className='charactersList'>
            {characters.map((character) => (
              <CharacterModal
                key = {character.name}
                name = {character.name}
              />
            ))}
        </div>
    </div>
  )
}
 



export default CharactersList