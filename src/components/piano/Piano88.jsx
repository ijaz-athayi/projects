import React from 'react'
import '../css/piano/piano88.css'
import Navbar from '../navbar/Navbar';

const Piano24 = () => {
  const [volume, setVolume] = React.useState(1);

  const play1  = () => {const audio = new Audio(require('./sound2/key01.mp3')); audio.volume = volume;audio.play(); };
  const play2  = () => {const audio = new Audio(require('./sound2/key02.mp3')); audio.volume = volume;audio.play(); };
  const play3  = () => {const audio = new Audio(require('./sound2/key03.mp3')); audio.volume = volume;audio.play(); };
  const play4  = () => {const audio = new Audio(require('./sound2/key04.mp3')); audio.volume = volume;audio.play(); };
  const play5  = () => {const audio = new Audio(require('./sound2/key05.mp3')); audio.volume = volume;audio.play(); };
  const play6  = () => {const audio = new Audio(require('./sound2/key06.mp3')); audio.volume = volume;audio.play(); };
  const play7  = () => {const audio = new Audio(require('./sound2/key07.mp3')); audio.volume = volume;audio.play(); };
  const play8  = () => {const audio = new Audio(require('./sound2/key08.mp3')); audio.volume = volume;audio.play(); };
  const play9  = () => {const audio = new Audio(require('./sound2/key09.mp3')); audio.volume = volume;audio.play(); };
  const play10 = () => {const audio = new Audio(require('./sound2/key10.mp3')); audio.volume = volume;audio.play(); };
  const play11 = () => {const audio = new Audio(require('./sound2/key11.mp3')); audio.volume = volume;audio.play(); };
  const play12 = () => {const audio = new Audio(require('./sound2/key12.mp3')); audio.volume = volume;audio.play(); };
  const play13 = () => {const audio = new Audio(require('./sound2/key13.mp3')); audio.volume = volume;audio.play(); };
  const play14 = () => {const audio = new Audio(require('./sound2/key14.mp3')); audio.volume = volume;audio.play(); };
  const play15 = () => {const audio = new Audio(require('./sound2/key15.mp3')); audio.volume = volume;audio.play(); };
  const play16 = () => {const audio = new Audio(require('./sound2/key16.mp3')); audio.volume = volume;audio.play(); };
  const play17 = () => {const audio = new Audio(require('./sound2/key17.mp3')); audio.volume = volume;audio.play(); };
  const play18 = () => {const audio = new Audio(require('./sound2/key18.mp3')); audio.volume = volume;audio.play(); };
  const play19 = () => {const audio = new Audio(require('./sound2/key19.mp3')); audio.volume = volume;audio.play(); };
  const play20 = () => {const audio = new Audio(require('./sound2/key20.mp3')); audio.volume = volume;audio.play(); };
  const play21 = () => {const audio = new Audio(require('./sound2/key21.mp3')); audio.volume = volume;audio.play(); };
  const play22 = () => {const audio = new Audio(require('./sound2/key22.mp3')); audio.volume = volume;audio.play(); };
  const play23 = () => {const audio = new Audio(require('./sound2/key23.mp3')); audio.volume = volume;audio.play(); };
  const play24 = () => {const audio = new Audio(require('./sound2/key24.mp3')); audio.volume = volume;audio.play(); };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value / 100);
  };

 
   const handlehide = () =>{
     var hidekey = document.getElementsByClassName("hidethis");
     for( var i=0; i<hidekey.length; i++){
       if(hidekey[i].style.display === "block"){
         hidekey[i].style.display = "none";
       }else{
         hidekey[i].style.display ="block";
       }
     }
   }
  return (
    <>
    <Navbar />
    <div id='body24'>
      <div id='content24'>
        <div className="buttons24">
          <section id='key-volume1'>
          <span className='span11'>volume</span><br />
          <input
              type="range"
              name="volume"
              id=""
              min="0"
              max="100"
              value={volume * 50}
              onChange={handleVolumeChange}
            />

          </section>
          <section id='key-checkbox1'>
          <span className='span11'>Show Keys</span> 
          <input type="checkbox" name="hidenote" id="keycheck" onClick={handlehide}  />
          
          </section>
        </div> 
        <div id="bottom24">
        <div id="bottomkeys24" className='scroll-to-right'>
        <ul className='piano-keys24'>
            <li className=" key24 white24" onClick ={play1 }><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play2 }><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play3 }><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play4 }><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play5 }><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play6 }><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play7 }><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play8 }><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play9 }><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play10}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play11}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play12}><span className="hidethis">B</span></li>
            <li className=" key24 white24" onClick ={play13}><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play14}><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play15}><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play16}><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play17}><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play18}><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play19}><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play20}><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play21}><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play22}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play23}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play24}><span className="hidethis">B</span></li>
            <li className=" key24 white24" onClick ={play13}><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play14}><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play15}><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play16}><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play17}><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play18}><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play19}><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play20}><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play21}><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play22}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play23}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play24}><span className="hidethis">B</span></li>
            <li className=" key24 white24" onClick ={play13}><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play14}><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play15}><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play16}><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play17}><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play18}><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play19}><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play20}><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play21}><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play22}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play23}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play24}><span className="hidethis">B</span></li>
            <li className=" key24 white24" onClick ={play13}><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play14}><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play15}><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play16}><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play17}><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play18}><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play19}><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play20}><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play21}><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play22}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play23}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play24}><span className="hidethis">B</span></li>
            <li className=" key24 white24" onClick ={play13}><span className="hidethis">C</span></li>
            <li className=" key24 black24" onClick ={play14}><span className="hidethis">DB <br /> c#</span></li>
            <li className=" key24 white24" onClick ={play15}><span className="hidethis">D</span></li>
            <li className=" key24 black24" onClick ={play16}><span className="hidethis">EB <br /> D#</span></li>
            <li className=" key24 white24" onClick ={play17}><span className="hidethis">E</span></li>
            <li className=" key24 white24" onClick ={play18}><span className="hidethis">F</span></li>
            <li className=" key24 black24" onClick ={play19}><span className="hidethis">GB <br /> F#</span></li>
            <li className=" key24 white24" onClick ={play20}><span className="hidethis">G</span></li>
            <li className=" key24 black24" onClick ={play21}><span className="hidethis">AB <br /> G#</span></li>
            <li className=" key24 white24" onClick ={play22}><span className="hidethis">A</span></li>
            <li className=" key24 black24" onClick ={play23}><span className="hidethis">BB <br /> A#</span></li>
            <li className=" key24 white24" onClick ={play24}><span className="hidethis">B</span></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Piano24
