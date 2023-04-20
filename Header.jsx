import logo from './../img/spotify.png';
import player from './../img/4208490.png';
import star from './../img/2377810.png'
import left from './../img/arrow-point-to-left.png';
import right from './../img/arrow-point-to-right.png';
import pause from './../img/pause.png';
import m from './../img/download.jpg';
import play from './../img/27223.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaPlay,FaPause,FaChevronLeft,FaRegStar,FaStar } from "react-icons/fa";


const Header = ({audioHandler,setAudioHandler,currentSong,starClick,
    setStarClick,songCurrentTime,songTotalTime,audioRef,setCurrentSong,sing}) => {

  

    return (
<header>

<div className="container h-120">
    <div className="h-100  d-flex align-items-center">

    <div className="btn music-cover d-flex align-items-center justify-content-center" 
         style={{backgroundImage:`url(${currentSong[0].cover})`}}>

       <div className="cover-filter">
        <button className="btn" style={{backgroundColor:"rgba(0,0,0,0)"}} 
        onClick={()=>setAudioHandler(!audioHandler)}>

         {audioHandler? < FaPlay color="#1db954" size="5rem"/>
          : <FaPause color="#1db954" size="5rem"/>}
        </button>
       </div>
             
    </div>


<div className="music-desc flex-grow-1" >
 <div className="d-flex justify-content-between">
    <div className="title">
       <h2>{currentSong[0].name}</h2>
       <h3>{currentSong[0].artist}</h3>
    </div >
     <button className='btn'  onClick={()=>setStarClick(!starClick)}>
        <span>
          {starClick? <FaStar color='green' size="2rem"/>
           : <FaRegStar  background-size="cover"color='green' size="2rem" border-radius="50%"/>  }  
        </span>
      
     </button>
</div>

   

    <div className="music-range">
        <div className="d-flex justify-content-between">
        <span>{`${Math.floor(songCurrentTime/60)} : ${('0'+ Math.floor(songCurrentTime % 60)).slice(-2)}`}</span>
        <span>{`${Math.floor(songTotalTime/60)} : ${('0'+ Math.floor(songTotalTime % 60)).slice(-2)}`}</span>
        </div>
      
       <input className="w-100 margin-up:'20px'" 
       min={0}
       max={songTotalTime}
       onChange={(e)=>audioRef.current.currentTime = e.target.value}
       type="range"
       />
      
    </div>

    <div className="music-nav">
        <button onClick={()=>{
    const index=sing.findIndex(item => item.id === currentSong[0].id);
    setCurrentSong([sing[index-1]])
     if(sing.indexOf(currentSong[0])<=0){
    setCurrentSong([sing[sing.length-1]]);} }}
                  
            ><img src={left} alt=""width="10px"  />
        </button>
        <button className="btn" 
        onClick={()=>setAudioHandler(!audioHandler)}>

        {audioHandler? <FaPlay color='white'/>
          : <FaPause color="white"/>}</button>
           
        <button onClick={()=>{
            const index=sing.findIndex(item => item.id === currentSong[0].id);
            setCurrentSong([sing[index+1]]);
             if(sing.indexOf(currentSong[0])===sing.lenght -1){
            setCurrentSong([sing[0]])} }
           
             
                } 
     
         ><img src={right} width="10px"/></button>

    </div>

    </div>

<div className="logo w-25 d-flex justify-content-end">
   <img src={logo} alt="" width="120px" /> 
</div>

    </div>



</div>
</header>
      );
}
 
export default Header;