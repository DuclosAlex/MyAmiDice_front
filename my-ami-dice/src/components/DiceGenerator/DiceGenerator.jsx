import { useContext, useEffect, useState } from "react";
import ContextGameRoom from "../../Context/GameRoomContext"
import { Button } from "semantic-ui-react"
import './style.scss';
import {io} from "socket.io-client"


const socket = io("http://178.18.253.7:4000");

socket.on("connect", () => {
    console.log("je me connecte depuis le dice generator")
})

function DiceGenerator() {
    
    const [dataDice, setDataDice] = useState({
        diceName: "",
        diceValue: "",
        dicePrivate:"",
    });

    const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
    const userData = JSON.parse(dataStorage) 
    const pseudo = userData.pseudo

    const [roomId, setMasterId] = useContext(ContextGameRoom)


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
            let room = ""
            if(dataDice.dicePrivate === true){
                room = roomId
                console.log("room", room)
            }
            const diceMessage = `Résultat du ${dataDice.diceName}: ${dataDice.diceValue}`
            socket.emit("send-message",{pseudo: pseudo, message: diceMessage}, room)
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