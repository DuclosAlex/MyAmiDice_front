import { useState } from "react";
import J4 from "../../assets/images/joueur4.jpg"
import CharacterModifyAvatarModal from '../CharacterModifyAvatarModal/CharacterModifyAvatarModal';
import CharacterModifyPrésentation from '../CharacterModifyPrésentation/CharacterModifyPrésentation';
import './style.scss';

function CharacterSheet() { 
  
  const character= {
    id : 5, // character id
    firstname : "Tom",
    lastname : "Cruse",
    race :"humain",
    is_alive : true,
    class : "Dernier Samouraï",
    description : "une description de personnage",
    avatar : "url de l'avatar",
    skills : [
      {
        id : 1,
        name : "coup de katana",
        description : "pas de besoin d'un dessin"
      }
    ],
    items : [
      {
        id : 1, // items id
        name : "Boule de feu",
        description : " Attaque bouilllante !",
      }
    ],
  characteristics : {
    id : 7, // id characteristics,
    strength : 17,
    dexterity : 17,
    constitution : 17,
    wisdom : 17,
    charisma : 17,
    intelligence : 17,
    level : 17,
    max_hp : 17,
    current_hp : 17,
    max_mana : 17,
    current_mana : 17
    }
  }
  
  const [openModal, setOpenModal] = useState(false)
  const [doClick, setDoClick] = useState(false)
  //console.log("click:",openModal)

  const handleClickAvatar = () => {
    // TODO: comparer l'id du mj de la game avec celui du joueurs pour que le mj ne puiss pas realiser le handleclick
    setOpenModal(!openModal);
      
    }

  const handleClick = (event) => {
    setDoClick(true)
  }
    
    const handleCloseModal = () => {
      setOpenModal(false)
    }
    
  return (
    <div className='characterSheet'>
      <div className="headContainer">
      <img className="character-avatar" src={J4} alt="character-avatar" onClick={handleClickAvatar} /* au clic sur l'image une modale s'ouvre et donne l'input file*/ />
      {openModal? <CharacterModifyAvatarModal toClose={handleCloseModal} /> : null }       
        <div className="info-character">
          <div className="presentation-character">
            <div className="presentation-name" onClick={handleClick}>
              {doClick? 
              <CharacterModifyPrésentation data={"nom"} type={"text"} characterValue={character.lastname} />
              :
              `${character.lastname}`} 
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

export default CharacterSheet