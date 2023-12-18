export default function ({userData}){
    return(
        <div className='user'>
            <img src={userData.profile_picture} alt='https://nevateka.ru/upload/iblock/bfd/mcibvfdrfow139gharqpg3nlcgqdk8bn/0aa07cc1-2eab-47f2-8a5c-e147fa415dfd.png'/>
            <span>{userData.name}</span>
        </div>
    )
}