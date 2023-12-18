export default function({data, ...props}){
    return(
        <div className={props.className} >
            <img src={data.img} alr='...'/>
            <span>{data.name}</span>
        </div>
    )
}