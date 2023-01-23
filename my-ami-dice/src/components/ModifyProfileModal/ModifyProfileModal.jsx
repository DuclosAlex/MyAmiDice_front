import React, { useState } from 'react'
import { Button, Form, Header, Modal } from 'semantic-ui-react'

function ModifyProfileModal({data, toDelete, isPassword}) {

  const [open, setOpen] = useState(false)

  const [modifyEmail, setModifyEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const [modifyPassword, setModifyPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
	event.preventDefault()
  
	if (event.target.name === "formProfile"){
		if(state.email === state.confirmEmail){
			if(validator.validate(state.email)){
				alert('gg')
			} else {
				dispatch({
					type:ERROR,
					payload: {error: "Le format de votre adresse mail est invalide" }
				})
			}
		} else {
			dispatch({
				type:ERROR,
				payload: {error: "Votre confirmation n'est pas identique à votre email." }
			})
		}
	} else if( event.target.name === "formPassword"){
		if(state.password === state.confirmPassword){
			if(!isValidPassword(state.password)){
				dispatch({
					type:ERROR,
					payload: { error: "Votre mot de passe doit contenir au moins 10 caractères, une majuscule, un caractère spécial et un chiffre." }
				});
				return
			}
			
			

		} else {
			dispatch({
				type:ERROR,
				payload: {error: "Votre confirmation n'est pas identique à votre password" }
			})
		}
    }
  }

  

  return (   

	<Modal
	  closeIcon
	  open={open}
	  trigger={ toDelete? <Button>Supprimer votre compte</Button> : <Button>Modifier</Button>}
	  onClose={() => setOpen(false)}
	  onOpen={() => setOpen(true)}
	>
	  <Header content = {`${data}`} />
	  <Modal.Content>
	   {toDelete? 
	   <div className='confirmDeleteButton'>
		<Button onClick={() => setOpen(false)} >Non</Button>
		<Button>Oui</Button>
		</div>
		:
		<div className='modifyForm'>{/* changer l'inverion du password pour apres */}
			{!isPassword? 
				<Form onSubmit={handleSubmit}>
					<Form.Field>
						<label>Votre Pseudo</label>
						<input />
					</Form.Field>
					<Form.Field>
						<label>Confirmer votre email</label>
						<input />
					</Form.Field>
					<Form.Field>
						<label>Votre email</label>
						<input />
					</Form.Field>
					<Form.Field>
						<label>Confirmer votre email</label>
						<input />
					</Form.Field>
					<Form.Field>
						<label>Votre email</label>
						<input />
					</Form.Field>
					<Form.Field>
						<label>Confirmer votre email</label>
						<input />
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>			
			:
				<Form>
					<Form.Field>
						<label>{data}</label>
						<input />
					</Form.Field>
					<Button type='submit'>Submit</Button>
				</Form>}
		</div>}
	  </Modal.Content>      
	</Modal>
  )
}


export default ModifyProfileModal