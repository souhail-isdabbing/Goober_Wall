import Polaroid from './Polaroid'
import './Modal.css'


function Modal({image,name,closing}){
    return(
        <div className='bg-black-rgba fixed z-50 inset-0 flex justify-center items-center '>
            <div className=' modal_fig m-10'>
                <button className='absolute top-2 right-2' onClick={closing}><img className='size-4' src='/src/close.png'></img></button>
                <img className='modal_img w-full mx-auto'src={`/src/${image}`} alt="my_photo"></img>
                <p className='modal_cap'>{name}</p>
            </div>
        </div>

    )
    
}

export default Modal;