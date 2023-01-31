import { useContext, useEffect, useState } from "react";
import ContextGameRoom from "../../Context/GameRoomContext"
import { SocketContext } from '../../Context/SocketContext';
import { Button } from "semantic-ui-react"
import './style.scss';



function DiceGenerator() {
    
    // Connexion à socket.io côté serveur
    const socket = useContext(SocketContext);
    
    socket.on("connect", () => {
        console.log("Connexion dicegenerator id : ", socket.id);
    })
    
    const [dataDice, setDataDice] = useState({
        diceName: "",
        diceValue: "",
        dicePrivate:"",
    });

    const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
    const userData = JSON.parse(dataStorage) 
    const pseudo = userData.pseudo

    const [masterSocketId, setMasterSocketId] = useContext(ContextGameRoom)


    const [toggleButtonPublic, setToggleButtonPublic] = useState(true)
    const [toggleButtonPrivate, setToggleButtonPrivate] = useState(false)

    const handleClickToggle = (event) => {
        if(event.target.name === "public"){
            setToggleButtonPublic(true);
            setToggleButtonPrivate(false)
        } else if (event.target.name === "private"){
            setToggleButtonPublic(false);
            setToggleButtonPrivate(true)
        }
    }

   

    const rollDice= (event) =>{
        const maxValueDice = event.currentTarget.value
        const rollresult = Math.round(Math.random()*(maxValueDice -1)) +1;
        setDataDice(prevState => ({
            ...prevState,
            diceName: `D${maxValueDice}`,
            diceValue: `${rollresult}`,
            dicePrivate: toggleButtonPrivate
        }))

    }
    
    useEffect(() => {
        if(dataDice.diceValue !== ""){
            let room = "";
            if(dataDice.dicePrivate === true){
                room = masterSocketId;
                console.log("room", room);
            }
            const diceMessage = `Résultat du ${dataDice.diceName}: ${dataDice.diceValue}`
console.log("socket.emit : pseudo : ", pseudo, " message : ", diceMessage);
            socket.emit("send-message",{pseudo: pseudo, message: diceMessage}, room) //TODO: Remplacer 5 par room
        }
   
    }, [dataDice.diceValue])   

    return (
      <div className='diceGenerator'>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={4} color='red' onClick={rollDice} > 
            D4
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={6} color='red' onClick={rollDice} > 
            D6
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={8} color='red' onClick={rollDice} > 
            D8
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={10} color='red' onClick={rollDice} > 
            D10
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={12} color='red' onClick={rollDice} > 
            D12
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={20} color='red' onClick={rollDice} > 
            D20
        </Button>
        
        </Button>
        <Button  as='div' labelPosition='right'>
            <Button type="submit" value={100} color='red' onClick={rollDice} > 
            D100
        </Button>
        
        </Button>
        <Button name="public" toggle active={toggleButtonPublic} onClick={handleClickToggle}>
            Publique
        </Button>
        <Button name="private" toggle active={toggleButtonPrivate} onClick={handleClickToggle}>
            Privée
        </Button>
        <div className="diceResult">
           <p>Resultat du {dataDice.diceName}: {dataDice.diceValue}</p> 
        </div>



      </div>
    )
  }
  
  export default DiceGenerator