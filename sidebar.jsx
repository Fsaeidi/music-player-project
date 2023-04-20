import logo from './../img/spotify.png';
import song from './../img/icons8-music-heart-24.png';
import popular from './../img/icons8-music.svg';
import info from './../img/icons8-info-24.png';
import music from './../img/icons8-music-24.png';
import contact from './../img/icons8-contact-us-24.png';
import star from './../img/icons8-star-filled-24.png';

const SideBar = () => {
    return ( 
      <aside className="side-bar px-4 h-200 flex-column">
        <div className="d-flex align-item-center">
        <img src={logo} alt="" srcset=""width="60px" />
          <span><h2 className="px-3"> music player</h2></span>
        
          
       </div>

        <nav>
            <ul>
                <li>
                    <a ><img src={popular} alt="" srcset="" />
                    <span>all song</span>
                    </a>
                </li>
                <li>
                    <a ><img src={star} alt="" />
                    <span>favorite songs</span></a>
                </li>
                <li>
                   <a> <img src={music} alt="" srcset="" />
                    <span>top player songs</span>
                    </a>
                </li>
                <li>
                    <a ><img src={song} alt="" srcset="" />
                    <span>popular singers</span>
                    </a>
                </li>
                <li>
                   <a ><img src={contact} alt="" srcset="" />
                    <span>contact us</span>
                    </a>
                </li>
                <li>
                   <a > <img src={info} alt="" srcset="" />
                    <span>about us</span>
                    </a>
                </li>
            </ul>

        </nav>
          <p>copy right</p>
            

      </aside>

     );
}
 
export default SideBar;