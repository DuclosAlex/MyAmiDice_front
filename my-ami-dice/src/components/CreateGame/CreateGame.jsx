import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import api from '../../api';
import './style.scss';

function CreateGame() {

  const dataStorage = localStorage.getItem('User'); // recupère la donnée lié a la key "User" dans le localStorage en STRING
  const userData = JSON.parse(dataStorage) // reconstruit les données du user en JSON 

  const [game, setGame] = useState({
    name: "",
    description: "",
    max_player: ""
  });
  
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setGame({
      ...game,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    
    const formData = {
      fake_id: 0,
      name: game.name.trim(),
      description: game.description.trim(),
      max_player: Number(game.max_player),
      user_id: userData.id,
      notes: "unenote", //TODO: lié la note
      status: "En cours"
    }
    // Envoi en BDD de la demande de création de partie
    try {      
      console.log("response", formData)
      const data = await api.post("/games/create", formData);
      console.log("response", data)
      
    } catch (error) {
      throw new Error (error);
    }

  }

  return (
    <>
      <div className="create">
        <h1>Création de partie</h1>
        <Form
          onSubmit={handleSubmit}
          unstackable
        >            
          <Form.Input
              placeholder="Nom de la partie"
              type="text"
              name="name"
              value={game.name} 
              onChange={handleChange}
              inline 
              required
          />
          <Form.TextArea 
              placeholder="Description de la partie"
              name="description"
              value={game.description}
              onChange={handleChange}
              inline
              required
          />
          <Form.Input
              placeholder="Nombre de joueurs maximum"
              type="number"
              name="max_player"
              value={game.max_player}
              onChange={handleChange}
              min="1"
              inline
              required
          />

          <Button
              type="submit"
              negative
          >
              Créer la partie
          </Button>
          {error && <p>{error}</p>}
        </Form>
      </div>
    </>
  )
}

export default CreateGame