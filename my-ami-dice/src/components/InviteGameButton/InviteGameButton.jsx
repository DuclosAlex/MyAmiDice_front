import { useContext, useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import api from '../../api';
import { UserContext } from '../../Context/UserContext';

import "./style.scss";

function InviteGameButton() {

    const [open, setOpen] = useState(false);
    const [pseudo, setPseudo] = useState("");
    const [user, setUser] = useContext(UserContext);
    const [message, setMessage] = useState("");

    const isMaster = (user.currentMasterID === user.id);

console.log("typeof user.currentMasterID : ", typeof user.currentMasterID);
console.log("valeur de user.currentMasterID : ",  user.currentMasterID);
console.log("typeof user.id : ", typeof user.id);
console.log("valeur user.id : ", user.id);

console.log("user.currrentMasterID === user.id : ", user.currentMasterID === user.id);

    function handleClick() {
        setOpen(true);
    }
    
    function handleChange(event) {
        setPseudo(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const currentGameId = user.currentGameID;

        const formData  = {
            fake_id: 0,
            status: "En cours",
            game_id: Number(currentGameId),
            pseudo: pseudo
        }
        try {
console.log("formData CREATION D'INVIT : ", formData);
            const response = await api.post("/invites/create", formData);
console.log("data après création de l'invit : ", response);
            if(response.status === 200) {
                setMessage(`${pseudo} a bien été invité à votre partie (id de l'invitation : ${response.data.id})`);
                console.log("tout s'est bien passé", response.data.id)
            }
        } catch (error) {
            throw new Error (error);
        }

    }

  return (
    <>
        {isMaster ?
            <Button onClick={handleClick}>Inviter un joueur</Button>
            :
            null
        }

        <Modal
            className="invitation-modal"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="tiny"
        >
            <Modal.Header>Inviter un joueur à votre partie</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit} >
                    <Form.Input
                        type="text"
                        placeholder="Pseudo du joueur"
                        name="pseudo"
                        value={pseudo}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        negative
                    >
                        Inviter !
                    </Button>
                    {message && <p>{message}</p>}
                </Form>
            </Modal.Content>
        </Modal>
    </>
  )
}

export default InviteGameButton;