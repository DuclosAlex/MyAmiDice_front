import React, { useState } from 'react'
import { Button, Form, Header, Modal } from 'semantic-ui-react'

function ModifyProfileModal({data, toDelete, isEmail, isPassword}) {

  const [open, setOpen] = useState(false)

  const [modifyEmail, setModifyEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleSubmit = (event) => {
	event.preventDefault()
	if(modifyEmail === confirmEmail){
		alert("GG")
	} else {
		alert("t nul")
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
		<div className='modifyForm'>
			{isEmail?
				<Form onSubmit={handleSubmit}>
					<Form.Field>
						<label>Votre email</label>
						<input onChange={event => setModifyEmail(event.target.value)} value={modifyEmail}/>
					</Form.Field>
					<Form.Field>
						<label>Confirmer votre email</label>
						<input onChange={event => setConfirmEmail(event.target.value)} value={confirmEmail}/>
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