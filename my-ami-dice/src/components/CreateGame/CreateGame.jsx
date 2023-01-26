import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import api from '../../api';
import './style.scss';

function CreateGame() {

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
      name: game.name.trim(),
      description: game.description.trim(),
      max_player: game.max_player
      //TODO: user_id: 
    }

    // Envoi en BDD de la demande de création de partie
    try {
      await api.post("/games", formData);
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
              label="Nom de la partie"
              type="text"
              name="name"
              value={game.name} 
              onChange={handleChange}
              inline 
              required
          />
          <Form.TextArea 
              label="Description de la partie"
              name="description"
              value={game.description}
              onChange={handleChange}
              inline
              required
          />
          <Form.Input
              label="Nombre de joueurs maximum"
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