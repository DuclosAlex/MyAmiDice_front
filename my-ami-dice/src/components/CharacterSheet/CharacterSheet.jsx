import api from "../../api";
import './style.scss';

function CharacterSheet() {   

  return (
    <div className='characterSheet'>
      <div className="headContainer">
        <img className="character-avatar" src="" alt="character-avatar" />
        <div className="info-character">
          <div className="presentation-character">
            <div>nom</div>
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