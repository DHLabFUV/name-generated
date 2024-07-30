"use client"
import React, {useRef, useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';



export default function MeaningPage() {
    const searchparam = useSearchParams()
    // {
    //     fulname:"" }
    const [namedata, setdata] = useState([]);
    const [isLoading, setLoading] = useState(true)
    // const[colors, setColor] = useState([])
    useEffect(() => {
        fetch('https://name-generated-backend.vercel.app/'+ searchparam.get("name"))
        .then((res) => res.json())
        .then((data) => {
            setdata(data)
            setLoading(false)
        })
        .catch(rejected => {
            setdata({"name-double": "",
            "meaning": "It seems there're some problem in the sever. Please try again",
            "name-single1": "", "sinovietnamese1": "", "radical1": "", "image1": "",
            "name-single2": "", "sinovietnamese2": "", "radical2": "", "image2": ""})
            setLoading(false)
        });        
    }, [])



// Choose color based on image 
    function averageColor(imageElement) {

        // Create the canvas element
        var canvas
            = document.createElement('canvas'),
    
            // Get the 2D context of the canvas
            context
                = canvas.getContext &&
                canvas.getContext('2d'),
            imgData, width, height,
            length,
    
            // Define variables for storing
            // the individual red, blue and
            // green colors
            rgb = { r: 0, g: 0, b: 0 },
    
            // Define variable for the 
            // total number of colors
            count = 0;
    
        // Set the height and width equal
        // to that of the canvas and the image
        height = canvas.height =
            imageElement.naturalHeight ||
            imageElement.offsetHeight ||
            imageElement.height;
        width = canvas.width =
            imageElement.naturalWidth ||
            imageElement.offsetWidth ||
            imageElement.width;
    
        // Draw the image to the canvas
        context.drawImage(imageElement, 0, 0);
    
        // Get the data of the image
        imgData = context.getImageData(
                    0, 0, width, height);
    
        // Get the length of image data object
        length = imgData.data.length;
    
        for (var i = 0; i < length; i += 4) {
    
            // Sum all values of red colour
            rgb.r += imgData.data[i];
    
            // Sum all values of green colour
            rgb.g += imgData.data[i + 1];
    
            // Sum all values of blue colour
            rgb.b += imgData.data[i + 2];
    
            // Increment the total number of
            // values of rgb colours
            count++;
        }
    
        // Find the average of red
        rgb.r
            = Math.floor(rgb.r / count);
    
        // Find the average of green
        rgb.g
            = Math.floor(rgb.g / count);
    
        // Find the average of blue
        rgb.b
            = Math.floor(rgb.b / count);
    
        return rgb;
    }
    
    // Function to set the background
    // color of the second div as 
    // // calculated average color of image
    function  SetaverageColor(){
        var rgb;
        var rgb2;
    
        setTimeout(() => {
            rgb = averageColor(
                document.getElementById('img1'));
            rgb2 = averageColor(
                    document.getElementById('img2'));
        
            // Select the element and set its
            // background color
            document
                .getElementById("text1")
                .style.color =
                'rgb(' + rgb.r + ','
                + rgb.g + ','
                + rgb.b + ')';
            document
                .getElementById("text2")
                .style.color =
                'rgb(' + rgb2.r + ','
                + rgb2.g + ','
                + rgb2.b + ')';
    
        }, 50)
    }


    if (isLoading) return <div style={{ width:"100%", height:"100%",position:"absolute", background:"black", cursor: "wait"}}></div>
    return (
    <div className='frame' id = 'MeaningPage'>
    <div id="leftSection">
        {/* <!-- Facebook section --> */}
        <div id="fbSection" onClick={()=>{
        window.open("https://www.facebook.com", '_blank')}}>DHLab@Fulbright</div>
        
        {/* <!-- User input section --> */}
        <div id="userInputSection">{searchparam.get("name")}</div>
    </div>

    {/* <!-- Top right section --> */}
    <div id="topRightSection">

        {/* <!-- Images section --> */}
        <div id="imagesSection">
            <img id="img1" src={namedata["image1"].length == 0? "/image/squareImg/la 2 1.png": ("/image/squareImg/"+namedata["image1"])}/>
            <div id="imageOverlay"></div>
        </div>

        <div id="imagesSection2">
        <img id="img2" style={{ right: 0}} src={namedata["image2"].length== 0? "/image/squareImg/hoa-2 1.png": ("/image/squareImg/"+namedata["image2"])}/>
        <div id="imageOverlay2"></div>
        </div>

        <div id="bg1"></div>
        <div id="bg2"></div>


        {/* <!-- Text sections for images --> */}
        <div class="textSection" id="text1" 
        onMouseEnter={()=>{
            document.getElementById('img1').style.transform="scale(1.5, 1.5)";
            document.getElementById('imageOverlay').style.opacity=0.2
        }}
        onMouseLeave={()=>{
            document.getElementById('img1').style.transform="scale(1, 1)";
            document.getElementById('imageOverlay').style.opacity=0.55
        }}
        >
            {/* <!-- Text 1  --> */}
            <div id="text11">{namedata["sinovietnamese1"]}</div>
            <div id="text12">{namedata["name-single1"]}</div>
            <div id="text13">{namedata["radical1"]}</div>
        </div>

        <div class="textSection" id="text2" 
        onMouseEnter={()=>{
            document.getElementById('img2').style.transform="scale(1.5, 1.5)";
            document.getElementById('imageOverlay2').style.opacity=0.2

        }}
        onMouseLeave={()=>{
            document.getElementById('img2').style.transform="scale(1, 1)";
            document.getElementById('imageOverlay2').style.opacity=0.55
        }}>
            {/* <!-- Text 2  --> */}
            <div id="text23">{namedata["sinovietnamese2"]}</div>
            <div id="text22">{namedata["name-single2"]}</div>
            <div id="text21">{namedata["radical2"]}</div>
        </div>

    </div>

    <div class="meaningcontainer">
    {/* onLoad={SetaverageColor()}> */}
        
        <div id="giaiNghiaSection">
            {/* <!-- Giai nghia fullname section --> */}
            {namedata["name-single1"].length == 0 ? namedata["name-single2"] : namedata["name-double"]}
        </div>

        <div id="meaningSection">
            {/* <!-- Meaning section --> */}
            {namedata["meaning"]}
        </div>

    </div>

    {/* Change the url in the open to the donate page */}
    <button id="donateFormSection" onClick={()=>{
        window.open("https://forms.office.com/", '_blank')
    }}>
        {/* <!-- Donate form section --> */}
        <div id="donateFormContent">
            <div id="donateText">Are you satisfied with the result? Give us feedback here</div>
            <div id="donateArrow">
            <svg width="currentWidth" height="currentHeight" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 1" d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9L28 9V7L0 7L0 9Z" fill="black"/>
            </svg>            
            </div>
        </div>
    </button>

    {/* Change the url in the open to the fb page */}
<div  id="fbicons" style={{top:"5%"}} onClick={()=>{
        window.open("https://www.facebook.com")}}> {"DHLab"} </div>


    {/* <!-- Grid lines --> */}
    <div class="grid-line grid-line-1"></div>
    <div class="grid-line grid-line-2"></div>
    <div class="grid-line grid-line-3"></div>
    <div class="grid-line grid-line-4"></div>
    <div class="grid-line grid-line-5"></div>

</div>
    )
}


    {/* left section */}
    {/* <div style={{left: 0,top: 0, width:"40%", height: "85%", 
    position: 'absolute'}}> */}
    {/* fb */}
    {/* <div style={{left: 0, top: 0,padding: "5%", position: 'absolute', color: 'black',
    fontSize: '2em', fontFamily: 'Finesse',
    fontWeight: '700', wordWrap: 'break-word'}}>DHLab@Fulbright</div> */}
    
    {/* user input */}
    {/* <div style={{width:'90%', paddingLeft:"5%", bottom:0, position: 'absolute', 
    color: 'black', fontSize: '5.5em', fontFamily: 'Finesse',
    fontStyle:"italic" ,fontWeight: '400', 
    wordWrap: 'break-word'}}>{searchparam.get("name")}</div> */}

    // </div>

    {/* top right section */}
    // <div style={{left: "40%",top: 0, width:"60%", height: "50%", 
    // position: 'absolute'}}>
    // {/* images */}
    //     <div style={{width: '100%', height: "100%", left: 0, top: 0, position: 'absolute'}}>
    //         <img id="img1"  style={{width: "50%", height: "100%", left: 0, top: 0, position: 'absolute', objectFit:"contain"}}
    //         src={namedata["image1"].length==0?  "/image/squareImg/la 2 1.png" :('/image/squareImg/'+namedata["image1"])}
    //         />
    //         <img id="img2"   style={{width: "50%", height: "100%", right: 0, top: 0, position: 'absolute',objectFit:"contain"}} src={namedata["image2"].length==0? '/image/squareImg/hoa-2 1.png':('/image/squareImg/'+namedata["image2"])} onload='SetaverageColor()'/>
    //         <div style={{width: "100%", height: "100%", left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.55)'}} />
    //     </div>
    //     <div style={{left:0, top:0, width: "50%", height: "100%"}}>
    //     {/* text 1 */}
    //     <div id ="text11" style={{width:"50%",left: 0, top: "5%", position: 'absolute', textAlign: 'center', color: '#013F00', fontSize: "10vw", fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}} >{namedata["sinovietnamese1"]}</div>
    //     <div id ="text12" style={{width:"50%",left: 0, top: "53%", position: 'absolute', textAlign: 'center', color: '#013F00', fontSize: "2.2vw", selfAlign: "center"  ,fontFamily: 'Be Vietnam Pro', fontWeight: '400', textTransform: "none", wordWrap: 'break-word'}}>{namedata["name-single1"]}</div>
    //     <div id ="text13" style={{width:"50%",left: 0, top: "62%",padding:"1.5%", position: 'absolute',color: '#013F00', fontSize: "1.2vw", selfAlign: "center" , fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["radical1"]}</div>
    //     </div>

    //     <div style={{width: '50%', height: "100%", right: 0, top: 0, position: 'absolute'}}>
    //     {/* text 2 */}
    //     <div id ="text23" style={{left: "30%", top:  "5%" , position: 'absolute', textAlign: 'center', color: '#510035', fontSize: "10vw", selfAlign: "center" , fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["sinovietnamese2"]}</div>
    //     <div id ="text22" style={{left: "35%", top: "53%", position: 'absolute',textAlign: 'center', color: '#510035', fontSize: "2.2vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["name-single2"]}</div>
    //     <div id ="text21" style={{width: "100%", left: 0, top:"62%",padding:"1.5%", position: 'absolute', color: '#510035', fontSize: "1.2vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["radical2"]}</div>
    //     </div>

    // </div>
    
    // <div style={{left: "40%", top: "50%", width:"60%", height: "50%", 
    // position: 'absolute'}}>
    // {/* giai nghia fulname */}
    // <div style={{left: 0, top: 0,padding:"1%",paddingLeft:"4%" ,position: 'absolute', color: 'black', fontSize: "4vw", fontFamily: 'Finesse' , fontWeight: '400', wordWrap: 'break-word'}}>{namedata["name-single1"].length==0? namedata["name-single2"]: namedata["name-double"]}</div>
    // <div style={{width: "90%",padding:"1%", paddingLeft:"4%", left: 0, top: "25%", position: 'absolute', color: 'black', fontSize: "1.3vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["meaning"]}</div>
    // </div>


    // <div style={{left:0, top: "85%", width:"100%", height: "6%",overflow:"clip", 
    // position: 'absolute' }}>
    //     {/* donate form */}
    //     <div style={{width: "60%", height: "100%", left: "40%", top: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.40)'}}>
    //     <div style={{left: 0, top: 0,paddingLeft:"2%", position: 'absolute', paddingTop:"0.5%",color: 'black', fontSize: 24, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Are you satisfied with the result? Donate here </div>
    //     <div style={{width: "10%", height: 0, right: 0, top: 0,paddingTop:"1.5%", position: 'absolute'}}>
    //         <img src='/image/icon/Arrow 2.svg'/>
    //         </div>
    //     </div>
    // </div>

    // {/* grid */}

    // <div style={{width: "100%", height: 0, left: 0, top: "85%", position: 'absolute',  border: '1px black solid'}}></div>
    // <div style={{width: "100%", height: 0, left: 0, top: "91%", position: 'absolute',  border: '1px black solid'}}></div>
    // <div style={{width: 0, height: "100%", left: "40%", top: 0, position: 'absolute',  border: '1px black solid'}}></div>
    // <div style={{width: "60%", height: 0, left: "40%", top: "50%", position: 'absolute', border: '1px black solid'}}></div>


// </div>
//     )
// }
