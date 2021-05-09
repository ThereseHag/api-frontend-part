import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ series }) => {

     
    return (
        <div className='button-container'>
        <Link to='Isfolket'><button className='button'>Sagan om Isfolket</button></Link>
        <Link to='Sandemoserien'><button className='button'>Sandemoserien</button></Link>
        <Link to='LjusetsRike'><button className='button'>Legenden om Ljusets Rike</button></Link>
        <Link to='Haxmastaren'><button className='button'>Häxmästaren</button></Link>
        <Link to='Trollrunor'><button className='button'>Trollrunor</button></Link>
        <Link to='Riddarna'><button className='button'>De svarta riddarna</button></Link>
        <Link to='Kiara'><button className='button'>Kiaras saga</button></Link>
        <Link to='Blaljus'><button className='button'>Blåljus</button></Link>
        <Link to='Fristaende'><button className='button'>Fristående</button></Link>
        <Link to='Documentation'><button className='button'>API documentation (in English)</button></Link>
        </div>

    )
}

export default Buttons