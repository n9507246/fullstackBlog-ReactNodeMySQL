import classes from './styles.module.scss'
import './styles.scss';
import FacebookIcon from '@mui/icons-material/Facebook';  
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '@components/posts/Posts'
function Profile() {

    return (
      <div className='profile'>
        <div className="images">
          <img src='https://gas-kvas.com/grafic/uploads/posts/2023-09/1695873841_gas-kvas-com-p-kartinki-ogon-37.jpg' className='cover'/>
          <img src='https://avatars.mds.yandex.net/get-pdb/1245924/1a273103-316e-41fe-bf97-dd136ad50a56/s1200?webp=false' className='profilePic'/>
        </div>
        <div className="profileContainer">
          <div className="profile_userInfo">
            <div className="left">
              <a href='http://facedook.com'>
                <FacebookIcon fontSize='large'/>
              </a>
              <a href='http://facedook.com'>
                <InstagramIcon fontSize='large'/>
              </a>
              <a href='http://facedook.com'>
                <TwitterIcon fontSize='large'/>
              </a>
              <a href='http://facedook.com'>
                <LinkedInIcon fontSize='large'/>
              </a>
              <a href='http://facedook.com'>
                <PinterestIcon fontSize='large'/>
              </a>
            </div>
            <div className="center">
              <span>Jane Doe</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon/>
                  <span>USA</span>
                </div>
                <div className="item">
                  <LanguageIcon/>
                  <span>kissMe.com</span>
                </div>
              </div>
              <button>follow</button>
            </div>
            <div className="right">
              <MailOutlineIcon/>
              <MoreVertIcon/>
            </div>              
          </div>
          
          <Posts />
        </div>

        <div style={{margin:"20px 70px"}}>
          
        </div>
      
        
      </div>
    )
  }
  
  export default Profile
  