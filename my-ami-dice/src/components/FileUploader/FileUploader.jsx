import React, { useRef } from 'react';

function FileUploader({onFileSelect}) {
    const fileInput = useRef(null);
  
    const handleFileInput = (event) => {
        const file = event.target.files[0];
        if(file.size > 2048) {
            onFileSelectError({ error: "La taille de l'image ne peut dépasser 2 Mo."});
        } else {
            onfileSelectSuccess(file);
        }

    }
  
    return (
    <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
        <button onClick={event => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
    </div>
  )
}

export default FileUploader