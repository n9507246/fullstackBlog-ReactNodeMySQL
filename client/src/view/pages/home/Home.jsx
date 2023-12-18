import LogoutBtn from '@components/logoutBtn/logoutBtn'
import Stories from '@components/stories/Stories'
import Posts from '@components/posts/Posts'
import classes from './styles.module.scss'
import './styles.scss'


function Home() {


    return (
      <>
      <div className='home'>
        <Stories/>
        <Posts/>        
        {/* <Posts/> */}
        <LogoutBtn/>
      </div>

      </>
    )
  }
  
  export default Home
  