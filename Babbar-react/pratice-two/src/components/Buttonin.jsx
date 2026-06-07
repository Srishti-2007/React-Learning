const Buttonin=(props)=>{
    return (
        <div>
            {props.children}
            <button onClick={props.incfun}>
                {props.text}
            </button>

        </div>
    )
}
export default Buttonin;