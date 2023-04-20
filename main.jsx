import MusicItem from "./MusicItem";
import { memo } from "react";


const Main = ({sing,currentSong,setCurrentSong,audioHandler}) => {
 


    return ( 
   <main className='px-6' >
     {sing.map(item=>(

  <MusicItem
  key={item.id}
    cover={item.cover}
    name={item.name}
    artist={item.artist}
    audio={item.audio}
    id={item.id}
    sing={sing}
   audioHandler={audioHandler}
    currentSong={currentSong}
    setCurrentSong={setCurrentSong}

  /> 
     ))}
      

    </main>


     );
}
 
export default memo(Main);