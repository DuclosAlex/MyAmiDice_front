import CharacterModal from '../CharacterModal/CharacterModal';

import './style.scss';





function CharactersList() { 
  
  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage) // reconstruit les données du user en JSON 
  let allCharacters = []
  if (userData){
     allCharacters = userData.characters
  }
      
  
  return (
      <div className='characters-container'>
        
        {allCharacters?
        <div className='charactersList'>
            {allCharacters.map((character) => (
              <CharacterModal 
                key = {character.id}
                firstname = {character.firstname}
                lastname= {character.lastname}
              />
            ))}
        </div>
        :
        null
        }
        
    </div>
  )
}
 



export default CharactersList