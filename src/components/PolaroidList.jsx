import './PolaroidList.css'
import Polaroid from './Polaroid'
import Modal from './Modal'
import { useState, useEffect } from 'react'
import {pets} from '/src/pets.js'


function PolaroidList(){
    const [modalOpen,setModalOpen]=useState(false)
    const [modalName,setModalName]=useState('')
    const [modalImage,setModalImage]=useState('')
    const [petList,setPetList]=useState([])

    const clicking=(name,image)=>{
        setModalName(name)
        setModalImage(image)
        setModalOpen(true)
    }
    const closing=()=>{
        setModalOpen(false)
    }
    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      };
      
    useEffect(()=>{
        const shuffledPets=shuffle(pets)
        setPetList(shuffledPets)
    },[])
    const picture_list=petList.map((pet,i)=>{
        return(
        <Polaroid key={i} name={pets[i].name} image={pets[i].image} clicking={()=>{clicking(pet.name,pet.image)} }/>
    )})
    


        
    return(
        
        <>
        {modalOpen && (
            <Modal closing={closing} name={modalName} image={modalImage}/>
        )}
        
        <div className="container mx-auto flex flex-wrap justify-center">
            {picture_list}
        </div>
        
        
        </>
    )
}

export default PolaroidList;