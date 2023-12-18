import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './styles.scss'
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '@components/comments/Comments';
import { useState } from 'react';


export default function({data}){
    
    const [isCommentOpen, setIsCommentOpen]= useState(false)
    const liked = false;
    return(
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="post_userInfo">
                        <img src={data.profile_picture} />
                        <div className="details">
                            <Link to={`/profile/${data.userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                                <span className='name'>{data.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                        
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{data.desctiption}</p>
                    <div className='img'>
                        <img src={data.img} />
                    </div>
                    
                </div>
                <div className="info">
                    <div className="item">
                    { liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/> } 12 Likes
                    </div>
                    <div className="item" onClick={()=>{console.log('isCommentOpen', isCommentOpen); setIsCommentOpen(!isCommentOpen)}}>
                        <TextsmsOutlinedIcon/>12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>Share
                    </div>
                </div>
                <div>
                    {
                        isCommentOpen ? <Comments/> : <></>   
                    }
                    
                </div>
            </div>
        </div>
    )
}