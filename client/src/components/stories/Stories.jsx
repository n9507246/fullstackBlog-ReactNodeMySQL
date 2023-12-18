import AddStory from "./AddStory"
import SingleStory from "./SingleStory"
import useAuth from '@hooks/AuthHook'
import './styles.scss'

export default function(){
    const stories = [
        {id: 1, name: 'Sweet Kiss', img: 'https://i.pinimg.com/736x/de/35/67/de35677966a63bf9dcc21f1369600f3c.jpg' },
        {id: 2, name: 'XXX_love_XXX', img: 'https://s.zefirka.net/images/2017-10-18/krasivye-devushki-v-nizhnem-bele/krasivye-devushki-v-nizhnem-bele-31.jpg'},
        {id: 3, name: 'Mommy', img: 'https://yobte.ru/uploads/posts/2019-11/devushki-s-krasivym-bjustom-70-foto-12.jpg'},
        {id: 4, name: ':P_69_:O', img: 'http://sextremist.ru/wp-content/uploads/2020/05/Shantal-Monique-11-819x1024.jpg'}
    ]
    return(
        <div className="stories">
            <AddStory className='story' data={useAuth().currentUser}/>
            {stories.map(storyData => <SingleStory className='story' data={storyData} key={storyData.id}/>)}
        </div>
    )
}