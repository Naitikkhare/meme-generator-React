import React from 'react'

export default function Meme() {
    return (
        <header className = 'meme-header'>
            <img 
                src = {require('../images/troll-face.png')} 
                className = 'memeImage'    
            />
            <p className = 'meme-title'>Meme Generator</p>
            <p className = 'meme-project'>React Project</p>
        </header>
    )
}
