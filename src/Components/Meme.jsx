import React, { useState, useEffect } from "react";


const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const getMemeImg = () => {
    let randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    let memeUrl = randomMeme.url;
    setMeme(prevMeme => {
      return (
        {...prevMeme, randomImage : memeUrl}
      )
    });
  };

  function handleChange(event) {
    const {name, value} = event.target  
    setMeme(prevMeme => {
        return {
          ...prevMeme,
          [name] : value
        }
      })
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          placeholder="Top text" 
          className="form-input" 
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          className="form-input" 
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />

        <button onClick={getMemeImg} className="form-btn">
          Get a new meme image
        </button>

      </div>
      <div className="meme-img-container">
        <img className="meme-image" src={meme.randomImage} alt="meme Image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
