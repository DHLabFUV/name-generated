'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {useRouter} from "next/navigation";


//randomize image in the background
export function getRandomsquareimg() {
  // list tat ca cac anh vuong de chon random
  const squareimg = ['hoa-2 1.png','la 2 1.png','ae023617055a96e8de494729564eae3e.png'];
    return squareimg[Math.floor(Math.random() * squareimg.length)];
  }
  
export function gotomeaningPage(name){
    return(<Link
      href={{
        pathname:"/meaning",
        query:{
          name: name
        }
      }}/>
      )
    }
  

export default function HomePage() {
  const [name, setName] = useState('Enter your name here')
  const[anh1, setanh1] = useState('')
  const[anh2, setanh2] = useState('')
  const[anhtron, setanhtron] = useState('')
  const router = useRouter()

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
  <div className='frame' id = 'Homepage'>
    {/* pic 1 (left margin) */}
    <div style={{width: "50%", height:"80%", left: '0%', top: '0%', position: 'absolute'}}>
    <img className = 'visualizepic'  src={'/image/squareImg/'+ anh1} />
    </div>
    {/* pic 2 (right top margin)*/}
    <div style={{width: "50%", height:"80%",right: '-10%', top: '0%', position: 'absolute', transform: 'scaleY(-1)'}}>
    <img className = 'visualizepic' src={"/image/squareImg/"+ anh2} />

    </div>
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
      <div  style={{height:"30%", left:'20%' ,right: '20%',top:'5%',position: 'absolute', textAlign: 'center', color: 'black', 
        fontSize: '1.5em', fontFamily: 'Be Vietnam Pro', 
        fontWeight: 400, zIndex:1111,
        wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt ut</div>
        <div style={{width: '100%', height: '100%', left: 1, top: 0, position: 'absolute',
        background: 'white'}} />
        {/* Text field */}
        <textarea id='fullnameInput' value={name}
        onChange={(e) => {
          setName(e.target.value)
          if (e.target.value.length > 28){
            document.getElementById("fullnameInput").style.fontSize = "3em";
          }
          else{
          document.getElementById("fullnameInput").style.fontSize = "3.5em";}
        }}
        style={{width: '80%', height: '30%', left: '10%', right: '10%', top: '45%', 
        position: 'absolute',color: 'black', fontSize: '3.5em', fontFamily: 'Finesse', 
        fontWeight: 400, overflowWrap: 'break-word', 
        textAlign: 'center',
        color:'black', fontStyle:"italic",overflow:'clip',   border: 'none', 
        outline: 'none',borderBottom: '4px black solid'}}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            router.push('/meaning?name='+name)
          }
        }}
        />
        {/* analyze button  */}
        <Link
        id="linking"
        onMouseEnter={(e) => {
          document.getElementById("linking").style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      }}
      onMouseLeave={(e) => {
        document.getElementById("linking").style.backgroundColor = 'rgba(0, 0, 0, 0.40)';
      }}
      href={{
          pathname:"/meaning",
          query:{
            name: name
          }
        }}
        style={{width: '100%',height: '9%', left: 0, bottom:0, 
        position: 'absolute', background: 'rgba(0, 0, 0, 0.40)'}}>
        <div style={{left: '2%',bottom: "0",position: 'absolute', color: 'white', 
        fontSize: '1.5em', fontFamily: 'Be Vietnam Pro',
        fontWeight: '400', wordWrap: 'break-word'}}>Analyze</div>
        <img src="/image/icon/Arrow 1.svg" style={{width: "5%", height: "60%", right: "2%", top:'20%', bottom:'20%', alignSelf:'center', position: 'absolute', alignContent:'center'}} />
      </Link>
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
    <div style={{width: '30%', left: '22%', top: '90%', position: 'absolute', color: 'black', fontSize: '2em', fontFamily: 'Finesse', fontWeight: '400', wordWrap: 'break-word'}}>facebook.dhlab</div>
    {/* fb */}
    <div style={{width: '20%', height: "5%", left: 0, top: '95%', position: 'absolute', border: '1px black solid'}}>
    <div style={{width: '5%', height: "80%", left: "1%", top: '10%', bottom:'10%', position: 'absolute', alignContent:"center"}}>
      <img src='/image/icon/XMLID_834_.svg'/>
    </div>
    <div style={{left: '10%', bottom: '0%', position: 'absolute', color: 'black', fontSize: '1.5em', fontFamily: 'Finesse', fontWeight: '700', wordWrap: 'break-word'}}>DHLab@Fulbright</div>
    </div>
</div>
  )
}
