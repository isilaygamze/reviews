
import { useState } from 'react'
import kisiler from './veri.js'
import "./app.css"


function Kisiler (){

    console.log(kisiler[0].name)

    const [sayac, sayacGuncelle] = useState(0)

function arttir(){
    if(sayac>-1 && sayac<3){sayacGuncelle(
        sayac+1
    )}
    else{
        sayacGuncelle(0)
    }
}

function azalt(){
    if(sayac>0 && sayac<4){sayacGuncelle(
        sayac-1
    )}
    else{
        sayacGuncelle(3)
    }
}

function rastgele(){
    let rndInt = Math.floor(Math.random() * 3) + 1
sayacGuncelle(rndInt)
}




    return(
        <>
        <div className='cerceve'>
       <h1>Our Reviews</h1>
       <div>
        <img src={kisiler[sayac].image} alt="" width={200}/>
        <p>{kisiler[sayac].name}</p>
        <p>{kisiler[sayac].job}</p>
        <p>{kisiler[sayac].text}</p>
        <button onClick={azalt}>SolClick</button>
        <button onClick={arttir}>SagClick</button>
        <p></p>
        <button onClick={rastgele}>Suprise me</button>
        <p>{sayac}</p>
       </div>
       </div>
       </>
    )
}

export default Kisiler