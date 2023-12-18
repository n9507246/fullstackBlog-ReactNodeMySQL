import Post from "@components/post/Post"
import './styles.scss'

export default function(){
    const posts = [
        {id: 1, userId:2, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg', name: 'Sweet Kiss', desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque. Quaerat nam illum, reprehenderit, molestiae culpa minima alias assumenda quis, in tempore a est consectetur pariatur architecto adipisci dolores dicta!', img: 'https://avatars.mds.yandex.net/i?id=a5301db5a598e50347982b1dbda80bf0c1ac09f6-10812288-images-thumbs&ref=rim&n=33&w=334&h=250' },
        {id: 2, userId:5, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg', name: 'XXX_love_XXX',  desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque. Quaerat nam illum, reprehenderit, molestiae culpa minima alias assumenda quis, in tempore a est consectetur pariatur architecto adipisci dolores dicta!', img: 'https://s.zefirka.net/images/2017-10-18/krasivye-devushki-v-nizhnem-bele/krasivye-devushki-v-nizhnem-bele-31.jpg'},
        {id: 3, userId:3, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/devushki-s-krasivym-bjustom-70-foto-12.jpg', name: 'Mommy', desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque. Quaerat nam illum, reprehenderit, molestiae culpa minima alias assumenda quis, in tempore a est consectetur pariatur architecto adipisci dolores dicta!', img: 'https://yobte.ru/uploads/posts/2019-11/zagorelye-russkie-devushki-125-foto-93.jpg'},
        {id: 4, userId:4, profile_picture: 'https://yobte.ru/uploads/posts/2019-11/znojnye-krasotki-113-foto-22.jpg', name: ':P_69_:O',  desctiption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque. Quaerat nam illum, reprehenderit, molestiae culpa minima alias assumenda quis, in tempore a est consectetur pariatur architecto adipisci dolores dicta!', img: 'http://sextremist.ru/wp-content/uploads/2020/05/Shantal-Monique-11-819x1024.jpg'}
    ]
    return(
        
        <div className='posts'>
            {posts.map(postData => <Post data={postData} key={postData.id} /> )}
        </div>
    )
}