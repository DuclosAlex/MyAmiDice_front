import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Header, Label, Modal } from 'semantic-ui-react';

function News({title, content, author, date}) {

    const [open, setOpen] = useState(false)

  return (
    <>
    <article className='news-container'>
        <Modal
            closeIcon
            open={open}
            trigger={<h1>{title}</h1>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
        <Header content = {title} />
        <Modal.Content>
            <div className='newsModale'>
                <time>{date}</time>
                <Label>{author}</Label>
                <p>{content}</p>
            </div>
        </Modal.Content>      
        </Modal>
        <time>{date}</time>
        <Label>{author}</Label>
        <p>{content}</p>        
    </article>
    </>  
  )
}

News.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default News