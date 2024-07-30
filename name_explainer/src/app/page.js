'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {useRouter} from "next/navigation";


//randomize image in the background
function getRandomsquareimg() {
  // list tat ca cac anh vuong de chon random
  const squareimg = ['hoa-2 1.png','la 2 1.png','ae023617055a96e8de494729564eae3e.png'];
    return squareimg[Math.floor(Math.random() * squareimg.length)];
  }
  
// export function gotomeaningPage(name){
//     return(<Link
//       href={{
//         pathname:"/meaning",
//         query:{
//           name: name
//         }
//       }}/>
//       )
//     }
  

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
    <div id = "leftpic">
    <img className = 'visualizepic'  src={'/image/squareImg/'+ anh1} />
    </div>
    {/* pic 2 (right top margin) */}
    <div id="rightpic">
    <img className = 'visualizepic' src={"/image/squareImg/"+ anh2} />

    </div>
    <div id="circlediv">
      {/* circle 1 (top right) */}
      <div id="smallcircle" />
      {/* circle 2 (bottom right, contain image) */}
      <div id="bigcircle" > 
        <img id="circlepic" src={"/image/squareImg/"+ anhtron} />
      </div>
    </div>
    {/* form */}
    <form id="textform">
    <div id="textinput">{"Enter 2 letters from your first name. We will explain your name in Sino-Vietnamese (Eg: Nguyễn Văn A -> input Văn A to the box)"}</div>
    {/* <!-- Text field --> */}
    <textarea id='fullnameInput' value={name} onChange={(e) => {
          setName(e.target.value)
          if (e.target.value.length > 28){
            if(window.getComputedStyle(document.getElementById("fbicons")).visibility === "hidden"){
              document.getElementById("fullnameInput").style.fontSize="3vw"
            }
            else{
              document.getElementById("fullnameInput").style.fontSize="5vw"
            }
          }
          else{
            if(window.getComputedStyle((document.getElementById("fbicons"))).visibility === "hidden"){
              document.getElementById("fullnameInput").style.fontSize="4vw"
            }
            else{
              document.getElementById("fullnameInput").style.fontSize="6vw"
          }}}
        }
        onKeyDown={event => {
          if (event.key === 'Enter') {
            router.push('/meaning?name='+name)
          }
        }}></textarea>
</form>

    {/* <!-- analyze button  --> */}
    <a id="linking" href={"/meaning?name="+name}>
        <div>Analyze</div>
        <img src="/image/icon/Arrow 1.svg"/>
    </a>

<div className="additional-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>sed do eiusmod tempor incididunt ut</div>

{/* <!-- Grid Lines --> */}
<div className="grid-line vertical-line-1"></div>
<div className="grid-line vertical-line-2"></div>
<div className="grid-line horizontal-line-1"></div>
<div className="grid-line horizontal-line-2"></div>
<div className="grid-line horizontal-line-3"></div>
<div className="grid-line horizontal-line-4"></div>

{/* <!-- Facebook Content --> */}
{/* Change the url in the open to the fb page */}

<div id="fbContent" onClick={()=>{
        window.open("https://dhlabfuv.github.io/DHLab-Website-Official/", '_blank')}}>{"DHLab@Fulbright"}</div>
<button id="fbIcon" onClick={()=>{
        window.open("https://dhlabfuv.github.io/DHLab-Website-Official/", '_blank')}}>
  <svg fill="currentColor" height="800px" width="800px" version="1.1" id="Layer_1" 
    viewBox="0 0 310 310">
      <g id="XMLID_834_">
        <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
          c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
          V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
          C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
          c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
      </g>
  </svg>
    <p>{"digital humanities lab"}</p>
</button>

    {/* Change the url in the open to the fb page */}
<div id="fbicons"  onClick={()=>{
        window.open("https://dhlabfuv.github.io/DHLab-Website-Official/")}}> {"DHLab"} </div>
</div>
  )
}
