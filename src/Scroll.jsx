import './Scroll.css'

function Scroll(props){
    return(
        <div className='box'>
        <div className='scroll m-3 p-7 overflow-y-scroll border border-black border-solid h-[96em] bg-[#d19e56] '>
            {props.children}
        </div>
        </div>
    )
}

export default Scroll;