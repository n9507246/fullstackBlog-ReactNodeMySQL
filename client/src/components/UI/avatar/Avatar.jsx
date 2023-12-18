import './styles.scss'
export default function({userImg}){
    return(
        <div className='avatar_img'>
            <img  src={userImg} alt=''/>
        </div>
    )
}