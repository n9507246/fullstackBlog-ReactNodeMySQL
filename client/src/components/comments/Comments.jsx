import Avatar from '@UI/avatar/Avatar'
import useAuth from '@hooks/AuthHook'
import './styles.scss'
export default function(){
    const comments = [
        {id:1, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi quae facere ipsa? Excepturi a voluptatum eaque, labore cupiditate molestiae vitae! Veniam molestiae animi nostrum maiores quis doloremque at ullam.', name: 'John Doe', userId: 2, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg'},
        {id:2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi quae facere ipsa? Excepturi a voluptatum eaque, labore cupiditate molestiae vitae! Veniam molestiae animi nostrum maiores quis doloremque at ullam.', name: 'John Doe', userId: 2, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg'},
        {id:3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi quae facere ipsa? Excepturi a voluptatum eaque, labore cupiditate molestiae vitae! Veniam molestiae animi nostrum maiores quis doloremque at ullam.', name: 'John Doe', userId: 2, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg'},
    ]
    return(
        <>
            <div className='comments'>
                <div className="write">
                    <Avatar userImg={useAuth().currentUser.profile_picture} />
                    <input type='text' placeholder='write a coment' />
                    <button>Send</button>
                </div>
                {comments.map(comment => 
                    
                    <div className='comment' key={comment.id}>
                        <Avatar userImg={comment.profile_picture} />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className='date'>1 hour ago </span>
                    </div>
                    
                    
                )}
            </div>
        </>
    )
}