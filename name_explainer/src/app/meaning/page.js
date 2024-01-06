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
        fetch('http://127.0.0.1:5000/'+ searchparam.get("name"))
        .then((res) => res.json())
        .then((data) => {
            setdata(data)
            setLoading(false)
        })
        .catch(rejected => {
            // setdata(data)
            setLoading(false)
        });        
    }, [])




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
    // var rgb;
    // var rgb2;

    // setTimeout(() => {
    //     rgb = averageColor(
    //         document.getElementById('img1'));
    //     rgb2 = averageColor(
    //             document.getElementById('img2'));
    
    //     // Select the element and set its
    //     // background color
    //     document
    //         .getElementById("text11")
    //         .style.color =
    //         'rgb(' + rgb.r + ','
    //         + rgb.g + ','
    //         + rgb.b + ')';
    //     document
    //         .getElementById("text12")
    //         .style.color =
    //         'rgb(' + rgb.r + ','
    //         + rgb.g + ','
    //         + rgb.b + ')';
    //     document
    //         .getElementById("text13")
    //         .style.color =
    //         'rgb(' + rgb.r + ','
    //         + rgb.g + ','
    //         + rgb.b + ')';

    //     document
    //         .getElementById("text21")
    //         .style.color =
    //         'rgb(' + rgb2.r + ','
    //         + rgb2.g + ','
    //         + rgb2.b + ')';
    //     document
    //         .getElementById("text22")
    //         .style.color =
    //         'rgb(' + rgb2.r + ','
    //         + rgb2.g + ','
    //         + rgb2.b + ')';
    //     document
    //         .getElementById("text23")
    //         .style.color =
    //         'rgb(' + rgb2.r + ','
    //         + rgb2.g + ','
    //         + rgb2.b + ')';
    // }, 500)

    if (isLoading) return <p style={{color:"black"}}>Loading...</p>
    return (
    <div classname='frame' id = 'MeaningPage'>
    
    {/* left section */}
    <div style={{left: 0,top: 0, width:"40%", height: "85%", 
    position: 'absolute'}}>
    {/* fb */}
    <div style={{left: 0, top: 0,padding: "5%", position: 'absolute', color: 'black',
    fontSize: '2em', fontFamily: 'Finesse',
    fontWeight: '700', wordWrap: 'break-word'}}>DHLab@Fulbright</div>
    
    {/* user input */}
    <div style={{width:'90%', paddingLeft:"5%", bottom:0, position: 'absolute', 
    color: 'black', fontSize: '5.5em', fontFamily: 'Finesse',
    fontStyle:"italic" ,fontWeight: '400', 
    wordWrap: 'break-word'}}>{searchparam.get("name")}</div>

    </div>

    {/* top right section */}
    <div style={{left: "40%",top: 0, width:"60%", height: "50%", 
    position: 'absolute'}}>
    {/* images */}
        <div style={{width: '100%', height: "100%", left: 0, top: 0, position: 'absolute'}}>
            <img id="img1"  style={{width: "50%", height: "100%", left: 0, top: 0, position: 'absolute', objectFit:"contain"}}
            src={namedata["image1"].length==0?  "/image/squareImg/la 2 1.png" :('/image/squareImg/'+namedata["image1"])}
            />
            <img id="img2"   style={{width: "50%", height: "100%", right: 0, top: 0, position: 'absolute',objectFit:"contain"}} src={namedata["image2"].length==0? '/image/squareImg/hoa-2 1.png':('/image/squareImg/'+namedata["image2"])} onload='SetaverageColor()'/>
            <div style={{width: "100%", height: "100%", left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.55)'}} />
        </div>
        <div style={{left:0, top:0, width: "50%", height: "100%"}}>
        {/* text 1 */}
        <div id ="text11" style={{width:"50%",left: 0, top: "5%", position: 'absolute', textAlign: 'center', color: '#013F00', fontSize: "10vw", fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}} >{namedata["sinovietnamese1"]}</div>
        <div id ="text12" style={{width:"50%",left: 0, top: "53%", position: 'absolute', textAlign: 'center', color: '#013F00', fontSize: "2.2vw", selfAlign: "center"  ,fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["name-single1"]}</div>
        <div id ="text13" style={{width:"50%",left: 0, top: "62%",padding:"1.5%", position: 'absolute',color: '#013F00', fontSize: "1.2vw", selfAlign: "center" , fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["radical1"]}</div>
        </div>

        <div style={{width: '50%', height: "100%", right: 0, top: 0, position: 'absolute'}}>
        {/* text 2 */}
        <div id ="text23" style={{left: "30%", top:  "5%" , position: 'absolute', textAlign: 'center', color: '#510035', fontSize: "10vw", selfAlign: "center" , fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["sinovietnamese2"]}</div>
        <div id ="text22" style={{left: "35%", top: "53%", position: 'absolute',textAlign: 'center', color: '#510035', fontSize: "2.2vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["name-single2"]}</div>
        <div id ="text21" style={{width: "100%", left: 0, top:"62%",padding:"1.5%", position: 'absolute', color: '#510035', fontSize: "1.2vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["radical2"]}</div>
        </div>

    </div>
    
    <div style={{left: "40%", top: "50%", width:"60%", height: "50%", 
    position: 'absolute'}}>
    {/* giai nghia fulname */}
    <div style={{left: 0, top: 0,padding:"1%",paddingLeft:"4%" ,position: 'absolute', color: 'black', fontSize: "4vw", fontFamily: 'Finesse' , fontWeight: '400', wordWrap: 'break-word'}}>{namedata["name-single1"].length==0? namedata["name-single2"]: namedata["name-double"]}</div>
    <div style={{width: "90%",padding:"1%", paddingLeft:"4%", left: 0, top: "25%", position: 'absolute', color: 'black', fontSize: "1.3vw", fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{namedata["meaning"]}</div>
    </div>


    <div style={{left:0, top: "85%", width:"100%", height: "6%",overflow:"clip", 
    position: 'absolute' }}>
        {/* donate form */}
        <div style={{width: "60%", height: "100%", left: "40%", top: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.40)'}}>
        <div style={{left: 0, top: 0,paddingLeft:"2%", position: 'absolute', paddingTop:"0.5%",color: 'black', fontSize: 24, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Are you satisfied with the result? Donate here </div>
        <div style={{width: "10%", height: 0, right: 0, top: 0,paddingTop:"1.5%", position: 'absolute'}}>
            <img src='/image/icon/Arrow 2.svg'/>
            </div>
        </div>
    </div>

    {/* grid */}

    <div style={{width: "100%", height: 0, left: 0, top: "85%", position: 'absolute',  border: '1px black solid'}}></div>
    <div style={{width: "100%", height: 0, left: 0, top: "91%", position: 'absolute',  border: '1px black solid'}}></div>
    <div style={{width: 0, height: "100%", left: "40%", top: 0, position: 'absolute',  border: '1px black solid'}}></div>
    <div style={{width: "60%", height: 0, left: "40%", top: "50%", position: 'absolute', border: '1px black solid'}}></div>


</div>
    )
}
