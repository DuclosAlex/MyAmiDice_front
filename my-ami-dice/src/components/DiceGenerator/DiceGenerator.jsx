import { useState } from "react";
import { Button } from "semantic-ui-react"
import './style.scss';


function DiceGenerator() {

    

    const [dataDice, setDataDice] = useState({
        diceName: "",
        diceValue: "",
        dicePrivate:"",
    });

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
            dicePrivate:{toggleButtonPrivate}
        }))
    }

   
   

    return (
      <div className='diceGenerator'>
        <Button as='div' labelPosition='right'>
            <Button value={4} color='red' onClick={rollDice}>
            D4
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={6} color='red' onClick={rollDice}>
            D6
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={8} color='red' onClick={rollDice}>
            D8
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={10} color='red' onClick={rollDice}>
            D10
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={12} color='red' onClick={rollDice}>
            D12
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={20} color='red' onClick={rollDice}>
            D20
        </Button>
        
        </Button>
        <Button as='div' labelPosition='right'>
            <Button value={100} color='red' onClick={rollDice}>
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