import React from 'react'

export default function Meme() {
    
    const [meme , setMeme] = React.useState({
        topText: "top Text",
        bottomText: "bottom Text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes , setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    },[])  

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url        
        setMeme(item => {
            return {
                ...item,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name , value} = event.target
        setMeme(item => {
            return {
                ...item,
                [name]: value
            }
        })
    } 

    return (
        <div className = 'meme-body'>
            <div className = 'meme-inp'>
                <input 
                    type="text" 
                    placeholder="Top Text"
                    className = 'meme-input'
                    value = {meme.topText}
                    name = 'topText'
                    onChange = {handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text"
                    className = 'meme-input'
                    value = {meme.bottomText}
                    name = 'bottomText'
                    onChange = {handleChange}
                />
                </div>
            <button className = 'meme-button' onClick = {getMemeImage}>
                Get new meme
            </button>
            <div className = 'meme-img'>
                <img 
                    src = {meme.randomImage} 
                    className = 'meme-image'
                />
                 <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}