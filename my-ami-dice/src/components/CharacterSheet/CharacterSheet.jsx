import { useContext, useState } from "react";
import J4 from "../../assets/images/joueur4.jpg"
import { UserContext } from "../../Context/UserContext";
import PropTypes from 'prop-types';
import CharacterModifyAvatarModal from '../CharacterModifyAvatarModal/CharacterModifyAvatarModal';
import CharacterModifyPrésentation from '../CharacterModifyPrésentation/CharacterModifyPrésentation';
import './style.scss';

function CharacterSheet(characterId) { 
  const [user, setUser] = useContext(UserContext) 
  const [openModal, setOpenModal] = useState(false)
  const [doClick, setDoClick] = useState(false)
  
/*   if(characterId){
    const character = user.allCharacters.filter((character) => (character.id === characterId))
    console.log("characterFind", character)
  }  */
  
  const handleClickAvatar = () => {
    // TODO: comparer l'id du mj de la game avec celui du joueurs pour que le mj ne puiss pas realiser le handleclick
    if(user.id !== user.currentMasterID){
      setOpenModal(!openModal);
    }
      
    }

  const handleClick = (event) => {
    setDoClick(true)
  }
    
    const handleCloseModal = () => {
      setOpenModal(false)
    }
    
  return (
    
    <div className='div-character-sheet'>
      <div className="headContainer">
      <img className="character-avatar" src={J4} alt="character-avatar" onClick={handleClickAvatar} /* au clic sur l'image une modale s'ouvre et donne l'input file*/ />
      {openModal? <CharacterModifyAvatarModal toClose={handleCloseModal} /> : null }       
        <div className="info-character">
          <div className="presentation-character">
            <div className="presentation-name" onClick={handleClick}>
              {doClick? 
              <CharacterModifyPrésentation data={"nom"} type={"text"} characterValue={"test"} />
              :
              `${"test"}`} 
            </div>
            <div>prenom</div>
            <div>race</div>
            <div>classe</div>
            <div>lvl</div>
          </div>
          <div className="lifepoint-mana">
            <div className="lifePoint">
              <div>PV:</div>
              <div>barreStat</div>
            </div>
            <div className="manaPoint">
              <div>PM:</div>
              <div>barreStat</div>
            </div>
          </div>
        </div>
        <div className="description-character">
          <p>Description du charatere</p>
        </div>
        <div>
          <div className="characteristic-character">
            <div>
              <div>FOR:</div>
              <div>QTY</div>
            </div>
            <div>
              <div>DEX:</div>
              <div>QTY</div>
            </div>
            <div>
              <div>WIS:</div>
              <div>QTY</div>
            </div>
            <div>
              <div>CHA:</div>
              <div>QTY</div>
            </div>
            <div>
              <div>INT:</div>
              <div>QTY</div>
            </div>
            <div>
              <div>CONST:</div>
              <div>QTY</div>
            </div>            
          </div>
          <div>
            <div>nom du skill</div>
            <div>description du skill</div>
          </div>
        </div>
        <div className="item-character">
          <div>nom de l'item</div>
          <div>quatité d'item</div>
          <div>description de l'item</div>
        </div>
      </div>
    </div>
  )
}


CharacterSheet.propTypes = {
  characterId: PropTypes.number,
};
export default CharacterSheet