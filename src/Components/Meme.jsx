import React, { useState } from "react";
import memeData from "../memesData.js";

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemesImages, setAllMemesImages] = useState(memeData)

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  const getMemeImg = () => {
    const randomImg = allMemesImages.data.memes;
    let random = randomImg[Math.floor(Math.random() * randomImg.length)];
    let memeUrl = random.url;
    setMeme(prevMeme => {
      return (
        {...prevMeme, randomImage : memeUrl}
      )
    });
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button onClick={getMemeImg} className="form-btn">
          Get a new meme image
        </button>
      </div>
      <div className="meme-img-container">
        <img className="meme-image" src={meme.randomImage} alt="meme Image" />
      </div>
    </main>
  );
};

export default Meme;
