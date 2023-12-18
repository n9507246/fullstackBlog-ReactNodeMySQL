
export default function({data, ...props}){
    return(
        <div className={props.className} >
            <img src={data.profile_picture} alr='...'/>
            <span>{data.name}</span>
            <button>+</button>
        </div>
    )
}