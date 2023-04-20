import React,{useState,useRef, useEffect} from 'react';
import Header from './components/Header.jsx'
import SideBar from './components/sidebar.jsx';
import Main from './components/main.jsx';
import songs from "./Song";
import './styles/assess/index.scss';

function App() {
  const[sing,setSing]=useState(songs());
  const[audioHandler,setAudioHandler]=useState(false);
  const[starClick,setStarClick]=useState(false);
  const[currentSong,setCurrentSong]=useState([
    {
      id:0,
      name:'رفتی',
      artist:"Arash&Masih",
      cover:"https://musico.ir/wp-content/uploads/2023/04/Hamid-Hiraad-Rafti-Musico.ir_.jpg",
      active:false,
      audio:"https://files.musico.ir/siros/Hamid%20Hirad%20-%20Rafti%20(320).mp3"
      }

  ]);
  const[songCurrentTime,setSongCurrentTime]=useState();
  const[songTotalTime,setSongTotalTime]=useState();
  

  const audioRef=useRef();


  const getNext =( )=>{
    const index=sing.findIndex(item => item.id === currentSong[0].id);
            setCurrentSong([sing[index+1]]);
             if(sing.indexOf(currentSong[0])===sing.lenght -1){
            setCurrentSong([sing[0]])}
  }
   

  useEffect(()=>{
  const playPromis = audioRef.current.play();
  console.log(playPromis);

  if(playPromis !== undefined){
    playPromis.then(()=> {

      if (audioHandler) audioRef.current.play();
        else audioRef.current.pause();
      
    })
  }
     /*{ if (audioHandler) audioRef.current.play();
    else audioRef.current.pause()};*/

    setInterval(() => {
      setSongCurrentTime(audioRef.current.currentTime)
      setSongTotalTime(audioRef.current.duration)
    }, 1000);
    
    
 
   console.log(audioRef.current.currenTime);
  },[audioHandler]);



  return (
    <div className="App">
     <Header
     audioHandler={audioHandler}
     setAudioHandler={setAudioHandler}
     currentSong={currentSong}
     starClick={starClick}
     setStarClick={setStarClick}
     songCurrentTime={songCurrentTime}
     songTotalTime={songTotalTime}
     audioRef={audioRef}
     setCurrentSong={setCurrentSong}
     sing={sing}
     
     />
       
       <audio 
       src={currentSong[0].audio}
       ref={audioRef}
       onEnded={getNext}
       ></audio>
     <div className="container">
     <div className="row">
      <div className="col-md-4">
        
        <SideBar/> 
        </div>
        <div className="col-md-8">
        <Main 
        sing={sing}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioHandler={audioHandler}
        />
      </div>
      
      
      
      </div>
     </div>
    </div>
  );
}

export default App;
