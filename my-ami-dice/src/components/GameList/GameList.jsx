import React from 'react';
import { Button } from 'semantic-ui-react';
import GameModal from '../GameModal/GameModal';
import './style.scss';

const games = [
  {
    name: "On en a gros",
    id: 1,
    masterName: "Karadoc",
    status: "En cours",
    description: "Mais ya n'a pas de siège pauvre conne",
    nbPlayer: 3    
  },
  {
    name: "Fastidieux ou Fastueux",
    id: 1,
    masterName: "Guethenoc",
    status: "En pause",
    description: "Vous avez tué ma poule ?! Non mais est-ce que vous êtes pas un peu marteau, vous ? Parce que moi ça y est, j'ai les nerfs qui commencent à vriller ! Je vous montre : moi je bondis comme ça, et je vous arrive dessus en piqué diagonal. Et là c'est l'hymne à la cruauté, hein, un autel dressé au culte de la barbarie !",
    nbPlayer: 2
  },
  {
    name: "En tapinant",
    id: 1,
    masterName: "Seigneur Hervé de Rinel",
    status: "Terminé",
    description: "Y a plusieurs personnes qui sont passées par votre siège là, et ben, le tout premier, je crois qu'il s'appelait Carbure, ça fait vachement longtemps qu'on l'a pas vu. Moi je serais vous je lancerais des recherches.",
    nbPlayer: 5
  }
]

function GameList() {
  return (
    <div className='game-container'>
        <div className='gameList'>
            {games.map((game) => (
              <GameModal
                key = {game.name}
                name = {game.name}
                id = {game.id}
                masterName = {game.masterName}
                status = {game.status}
                description = {game.description}
                nbPlayer = {game.nbPlayer}
              />
            ))}
        </div>
        <Button>Créer une partie</Button>
    </div>
  )
}
 



export default GameList