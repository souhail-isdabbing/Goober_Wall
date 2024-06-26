import PolaroidList from './components/PolaroidList'
import { useState } from 'react'
import Scroll from './Scroll.jsx'
import './App.css'


function App(){
    return(
        <>
            <div className='bg-[#91673d]'>
            <h1 className='header text-8xl text-red-500 text-center mb-10'>Goober Wall</h1>
            <Scroll>
            <PolaroidList/>
            </Scroll>
            <footer className='footer text-center text-lg'>made by Souhail El Mazouni</footer>
            </div>
        </>
    )
}
export default App;
