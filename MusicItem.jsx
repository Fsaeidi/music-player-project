
import m from './../img/download.jpg';
import star from './../img/2377810.png'


const MusicItem = ({sing,cover,name,artist,id,currentSong,setCurrentSong,audioHandler}) => {

 const checkActive=()=>{
    const activSong=sing.filter(item=>item.id==id)
    setCurrentSong(activSong);
 }


    return (
     <div onClick={checkActive}
     className="music-item d-flex align-items-center">
        <div className={`music-cover 
        ${(currentSong[0].id===id && audioHandler) ? 'active':''}
        `}
        
        style={{backgroundImage:`url(${cover})`}} >
       
        </div> 

        <div className="music-desc">
            <h4>{name}</h4>
            <h5>{artist}</h5>
        </div>
        <div className="music-option d-flex align-item-center w-25 ">
            <span>02:54</span>
            <img width="30px" height="30px" font-color="green" src={star} alt="" />
        </div>
     </div>


      );
}
 
export default MusicItem;