'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

//randomize image in the background
export function getRandomsquareimg() {
  // list tat ca cac anh vuong de chon random
  const squareimg = ['hoa-2 1.png','la 2 1.png'];
    return squareimg[Math.floor(Math.random() * squareimg.length)];
  }

//randomize image in the circle
function getRandomroundimg() {
  // list tat ca cac anh tron de chon random
  const round = ['Ellipse_2.png'];
  return round[Math.floor(Math.random() * round.length)];
  }
  

  

export default function HomePage() {
  const [name, setName] = useState('Enter your name here')
  const[anh1, setanh1] = useState('')
  const[anh2, setanh2] = useState('')
  const[anhtron, setanhtron] = useState('')
  useEffect(() => {
    let anh1 = getRandomsquareimg()
    let anh2 = getRandomsquareimg()
    let anhtron = getRandomsquareimg()
    setanh1(anh1)
    setanh2(anh2)
    setanhtron(anhtron)
  }
, [])

  return (
  <div class='frame' id = 'Homepage'>
    {/* pic 1 (left margin) */}
    <img class = 'visualizepic' style={{left: '0%', top: '0%', position: 'absolute'}} src={'/image/squareImg/'+ anh1} />
    {/* pic 2 (right top margin) width: 651, height: 996, left: 861, top: -7,*/}
    <img class = 'visualizepic' style={{right: '-10%', top: '0%', position: 'absolute', transform: 'scaleY(-1)'}} src={"/image/squareImg/"+ anh2} />
    <div style={{width: '50%', height: '50%', left: '60%', bottom: '45%', position: 'absolute'}}>
      {/* circle 1 (top right) */}
      <div style={{width: '25vw', height:'25vw', left: 0, bottom: '0', position: 'absolute', background: 'white', borderRadius: 9999, border: '1px black solid'}} />
      {/* circle 2 (bottom right, contain image) */}
      <div style={{width: '45vw', height: '45vw', left: '5%', top: '70%', position: 'absolute', background: 'white', borderRadius: 9999, border: '1px black solid', overflow: 'clip'}}> 
        <img style={{width: '100%', height: '100%', position: 'absolute', borderRadius: 9999, border: '1px black solid'}} src={"/image/squareImg/"+ anhtron} />
      </div>
    </div>
    {/* */}
    <form style={{width: '60%', height: '44%', left: '20%', top: '30%', position: 'absolute',}}>
      <div style={{left:'20%' ,right: '20%',top:'10%',position: 'absolute', textAlign: 'center', color: 'black', 
        fontSize: '1.5rem', fontFamily: 'Be Vietnam Pro', 
        fontWeight: 400, zIndex:1111,
        wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt ut</div>
        <div style={{width: '100%', height: '100%', left: 1, top: 0, position: 'absolute',
        background: 'white'}} />
        {/* Text field */}
        <textarea id='fullnameInput' 
        style={{width: '70%', height: '30%', left: '15%', right: '15%', top: '45%', position: 'absolute',color: 'black', fontSize: '3.5rem', fontFamily: 'Finesse', 
        fontWeight: 400, overflowWrap: 'break-word', 
        textAlign: 'center', 
        color:'black', overflow:'visible',   border: 'none', 
        outline: 'none',borderBottom: '4px black solid',
        objectFit: "scale-down"}} value={name}
        onChange={(e) => setName(e.target.value)}
        />
        {/* analyze button  */}
        <div style={{width: '100%',height: '9%', left: 0, bottom:0, 
        position: 'absolute', background: 'rgba(0, 0, 0, 0.40)'}}>
        <div style={{left: '1%', bottom: 0, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Analyze</div>
        <Link
        href={{
          pathname:"/meaning",
          query:{
            name: name
          }
        }}
        style={{width: "5%", height: "60%", right: 0, top:'20%', bottom:'20%', alignSelf:'center', position: 'absolute', alignContent:'center'}}>
        <img src="/image/icon/Arrow 1.svg" style={{objectFit:'cover', alignContent:'center', position:'absolute'}} />
        </Link>
      </div>
    </form>
    <div style={{width: "50%", left: "22%", top: "76%", position: 'absolute', color: 'black', fontSize: '1.5rem', fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt ut</div>
    
    {/* grid 1 (vertical) */}
    <div style={{width:0, height: '100%', left: '20%', top: 0, position: 'absolute',transformOrigin: '0 0', border: '1px black solid'}}></div>
    {/* grid 2 (vertical) */}
    <div style={{width: 0, height: '100%', left: '80%', top: 0, position: 'absolute', border: '1px black solid'}}></div>
    {/* grid 1 (horizontal) */}
    <div style={{width: '100%', height: 0, left: 0, top: '30%', position: 'absolute', border: '1px black solid'}}></div>
    {/* grid 2 (horizontal) */}
    <div style={{width: '100%', height: 0, left: 0, top: '70%', position: 'absolute', border: '1px black solid'}}></div>
    {/* grid 3 (horizontal) */}
    <div style={{width: '60%', height: 0, left: '20%', top: '74%', position: 'absolute', border: '1px black solid'}}></div>
    <div style={{width: '20%', height: 0, left: 0, top: '95%', position: 'absolute', border: '1px black solid'}}></div>
    <div style={{left: '2%', bottom: '0%', position: 'absolute', color: 'black', fontSize: '1.5em', fontFamily: 'Agrandir', fontWeight: '700', wordWrap: 'break-word'}}>DHLab@Fulbright</div>
    {/* fb */}
    <div style={{width: '30%', left: '22%', top: '90%', position: 'absolute', color: 'black', fontSize: '2em', fontFamily: 'Finesse', fontWeight: '400', wordWrap: 'break-word'}}>facebook.dhlab</div>
    <div style={{width: 17.68, height: 35, left: 0, top: '95%', position: 'absolute', border: '1px black solid'}}></div>
</div>
  )
}
