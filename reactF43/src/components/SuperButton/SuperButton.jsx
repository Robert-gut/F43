export default function SuperButton(props){

return(
    <button onClick={()=>{console.log('ok')}} style={{color: props.color, background: props.bg}}>
        {props.title}
    </button>
)
}
