import './Polaroid.css'



function Polaroid({name,image,clicking}){
    return(
        <>

        <figure className='m-10' onClick={clicking}>
            <img className='w-full' src={`./src/${image}`} ></img>
            <figcaption>{name}</figcaption>
        </figure>
      
        </>
    )
}

export default Polaroid;