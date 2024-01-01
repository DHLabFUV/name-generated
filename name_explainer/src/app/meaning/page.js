"use client"
import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';

export default function MeaningPage() {
    const searchparam = useSearchParams()
    const [data, setdata] = useState({
        fulname:"" });
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://127.0.0.1:5000/anh')
        .then((res) => res.json())
        .then((data) => {
            setdata({
                fulname:data.meaning
            })
            setLoading(false)
        })
        .catch(rejected => {
            setdata(data)
            setLoading(false)
        });        
    }, [])
    
    if (isLoading) return <p style={{color:"black"}}>Loading...</p>
    if (!data) return <p style={{color:"black"}}>No data</p>    
    return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{width: 899, height: 51, left: 613, top: 872, position: 'absolute', background: 'rgba(217, 217, 217, 0.40)'}} />
    <div style={{width: 899, height: 491, left: 613, top: 0, position: 'absolute'}}>
        <img style={{width: 450, height: 491, left: 0, top: 0, position: 'absolute'}} src='/image/squareImg/hoa-2 1.png' />
        <img style={{width: 450, height: 491, left: 449, top: 0, position: 'absolute'}} src="/image/squareImg/la 2 1.png" />
        <div style={{width: 899, height: 491, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.55)'}} />
    </div>
    <div style={{width:'40%',height:"20%",  left: 73, bottom:0, position: 'absolute', 
    color: 'black', fontSize: '5.5rem', fontFamily: 'Finesse', fontWeight: '400', wordWrap: 'break-word'}}>{searchparam.get("name")}</div>
    <div style={{left: 697, top: 560, position: 'absolute', color: 'black', fontSize: 64, fontFamily: 'Finesse', fontWeight: '400', wordWrap: 'break-word'}}>Phương Anh</div>
    <div style={{left: 50, top: 50, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Agrandir', fontWeight: '700', wordWrap: 'break-word'}}>DHLab@Fulbright</div>
    <div style={{width: 727, left: 697, top: 658, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>{data.fulname}</div>
    <div style={{left: 648, top: 880, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Are you satisfied with the result? Donate here </div>
    <div style={{width: 28, height: 0, left: 1433, top: 897, position: 'absolute', border: '2px black solid'}}></div>
    <div style={{width: 982, height: 0, left: 613, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
    <div style={{width: 899, height: 0, left: 1512, top: 491, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
    <div style={{width: 1512, height: 0, left: 1512, top: 922, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
    <div style={{width: 1512, height: 0, left: 1512, top: 871, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
    <div style={{width: 360, left: 1122, top: 322, position: 'absolute', color: '#510035', fontSize: 20, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Phía trên là bộ Thảo 艹: Cây cối.<br/>Phía dưới là chữ Ương 央: Ở giữa, trong (còn lấy làm âm).<br/></div>
    <div style={{left: 1252, top: 242, position: 'absolute', color: '#510035', fontSize: 32, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Anh</div>
    <div style={{left: 1199, top: 68, position: 'absolute', textAlign: 'center', color: '#510035', fontSize: 150, fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}}>英</div>
    <div style={{left: 778, top: 242, position: 'absolute', color: '#013F00', fontSize: 32, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Phương</div>
    <div style={{left: 722, top: 336, position: 'absolute'}}><span style={{color: '#013F00', fontSize: 32, fontFamily: 'Be Vietnam Pro', fontWeight: '400', wordWrap: 'break-word'}}>Bộ thủ: Thảo</span><span style={{color: '#013F00', fontSize: 32, fontFamily: 'Be Vietnam Pro', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>艸</span></div>
    <div style={{left: 742, top: 71, position: 'absolute', textAlign: 'center', color: '#013F00', fontSize: 150, fontFamily: 'Liu Jian Mao Cao', fontWeight: '400', wordWrap: 'break-word'}}>芳</div>
</div>
    )
}
