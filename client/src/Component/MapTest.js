import React, { useState } from "react"
import { Map, Marker,Overlay, Draggable } from "pigeon-maps"

export function MapTest() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)
  const [anchor, setAnchor] = useState([50.879, 4.6997]);
  const [region,setRegion] = useState('')

  return (
      <div>
    {/* <Map height={300} width={300} defaultCenter={[34.55790603353652, 9.80765814274244]} defaultZoom={5} center={center} 
    zoom={zoom} 
    onBoundsChanged={({ center, zoom }) => { 
      setCenter(center) 
      setZoom(zoom) 
    }} >
      <Marker 
        width={30}
        anchor={[36.79565886365252, 10.204450795495603]} 
        color={color} 
        onClick={() => setHue(anchor)} 
      />
      <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
        <h1>Ilene</h1>
      </Overlay>
      <Draggable offset={[34.55790603353652, 9.80765814274244]} anchor={anchor} onDragEnd={setAnchor}>
        <img src='../../public/Marker.png'/>
      </Draggable>
      
    </Map> */}
    
    <svg className="svgP" baseprofile="tiny" fill="#7c7c7c" height="2158"  width="1000"  viewbox="0 0 1000 2158" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" xmlns="http://www.w3.org/2000/svg">
 <path  d="M815.6 127.6l2.3 3.9-1.7 0-3.3-0.3-1.6 0.3-1.4-2.8 0.8-1.4 1.3-1 0.4-1 1.3-0.7 0.6 1.4 1.3 1.6z m-453.6-123.1l0.4 3.8-2.2 0.3-3.1-1-2.7 1.2-2.5 1.5-3.8-1.8 2.6-2.4 3.1-1.7 4-1.4 1.5-2 1.7 1.1 0 1.3 1 1.1z" id="TUN99" name="">
 </path>
 <a onClick={()=>setRegion('Tozer')}><path  d="M291.6 1041.7l-19.7 35.5-13.3 16.6-150.5 121.9-47.2 23.4-4.1 2.5 0-1.2-3.7-11.5-34.2-60-2.1-7.5-2.5-15.3-7-13.7-1.7-5-3.4-16.2-1.2-11.4 5.1-29.6 0.7-21.7 3.4-8 15.2-15.8 6-8 6.6-7 9.5-4.7 15.6-2.5 4.6-2.5 3.1-3.7 2.1-4.8 9.2-35.1 4.8-10.4 9.6-6.9 21.2-9.4 10.2-7.3 23.2-10.7 2-1.8 1.1 1 1.9 5.5 0.1 2.9-4 15.4 0 2.3 0.5 1.7 8.6 8.5 0.9 1.3 1.2 2.2-0.1 1.4-0.7 0.9-1.2 0.6-11.7 1.5-2.3 0.7-1.1 1-8.7 10.7-1.3 2.1-1.5 3.1 0.1 1.7 0.8 1.2 17.9 11.9 4.5 4.3 2.1 2.3 3.6 5.3 3 5.2 2 3 2.2 1.7 1.1 0.4 9.1 0.9 18.4 6.3 1.4 0.9 4.2 3.2 3.2 3.3 1 1.6 0.6 1.4 1 4.1 2.2 7 1.2 1.9 1.1 1 53.6-3.2 9.3 0.8 13.2 2.8z" id="TUN101" name="Tozeur">
 </path></a>
 <a onClick={()=>setRegion('Manubah')}><path d="M699.2 200.8l-1.1 0.7-34.4 11.1-30.3 16.7-10.3 4-4.6 2.5-2.2 1.6-0.2 1.1 0.4 1 1.3 1.3 1.9 1.3 1.2 1.4 0.7 3.6 1.5 2.1 4.4 3.2 2.1 2 1.2 2.3 0.1 2.6-0.7 3.2-12.2 12.5-4.5 3.2-3.7 0.8-1-2.2-1.5-1.9-1-0.6-2-0.1-2.1 0.5-1.3 1-1.4 1.6-4 7.3-4 9.6-2.4 2.2-7.5 2.4-2.5-5.7-9.6-14.2-8-16.8-1.8-4.9-0.9-3.4-0.8-1-1.4-0.8-6.6-0.5-13.8-4.8-28.6-26.8 9.7-8.4 21.2-9.7 12.9-2.9 2.3-1.2 1.6-1.2 2.9-5.2 3.3-4 4.3-3.8 2.3-1.6 1.8-0.9 8.9-0.4 4.9 0.6 4.7 1.4 13 6.1 1.7 0.4 3.5 0.3 3.3-0.1 2-0.7 1.4-0.9 0.9-1 1-2.1 1.9-5.1 3.9-7.5 2-3 8.5-17.6 1.6-4.5 1.4-2.4 2.1-2.8 1.5-2.5 2.5-3.1 1.7-1.4 1.8-0.9 12.8-1.3 11.6-4 1.6-0.3 2.2 3.5 0.8 2.9-1.5 3.7-1.6-4.4-10.6 10.5 2 15 9.2 15.5 11.2 11.5 9.1 4.4 2.6 1.8 5.7 8.2z" id="TUN102" name="Manubah">
 </path> </a>
 <path d="M507.6 219.9l28.6 26.8 13.8 4.8 6.6 0.5 1.4 0.8 0.8 1 0.9 3.4 1.8 4.9 8 16.8 9.6 14.2 2.5 5.7-14.4 12.1-4.5 4.9-1.5 4-7.2 10.4-3 7.4-14.7 1.6-5.4 1.2-4 1.7-10.5 5.7-2.2 0.9-2.1 0.4-2.9-0.5-2.2-1.3-1.5-1.1-5.4-5.7-2.2-1.5-3.3-1.8-2.3-0.8-3.1-0.2-14 0.9-7.3 1.3-2.2 1.1-2 1.7-0.9 1-2.9 4-9.7 17.7-2 0.4-3.1-0.6-12.7-7-4.3-3-1.6-0.7-1.9-0.4-3.3 0-3.5 0.5-14.1 5.2-2.5 0.5-6-4-19.9-19.2 4.6-2.6 1.2-0.8 0.9-1.1 0.6-2.2 0.2-8.7 0.5-2.9 0.9-2.2 1.6-2.2 3.9-4.4 0.8-1.1-0.3-3.5-1.5-5.6-8.2-22-1.9-2.5-0.9-1.7-0.7-2.1-0.5-5.7 1.6-15.3-0.6-2.7-1.3-1.6-2.3-1.9-3.7-2.1-14-2.3-1.3-0.5-2.5-1.8-0.9-1.2-0.3-1.3 0.5-1.7 1.2-2.6 0.8-3.3 0.1-2.7 0.3-1.7 1.1-2.5 1-1 9-7.5 1.6-2.3-0.2-2-0.9-2.5-4.6-7.6-9.3-10.7-0.7-1.3-0.3-1.5 0.6-2.2 0.8-0.9 1.6-0.8 4.6-1.7 0.8-0.7-1.6-3.2-10.6-11.3 1.9-0.8 5.4-5.3 7.6-9.3 7.5-14.6 3.3-2.2 2.4-1.2 6.8-7.3 2.6-1.6 7.4-3 0.3 1.4 0.6 10.5-0.4 4.7-1.4 6.6-0.4 4.3 0.7 3.5 1.1 2.7 1 1.3 1.2 0.8 1.1 0.2 15.2-0.3 1.6 0.6 1.7 1.1 3.1 2.7 2.5 3.3 0.9 2.3 2.3 7.6 5.9 12.9 3.2 8.8 1.3 2.3 1.2 1.7 8.1 7.7 2.2 1.5 2.3 1.2 8.8 2.9 2.9 1.9 2.5 2.1 1.4 2.9-0.1 3.7-0.8 3.9-1.9 5.2-0.6 1.2-1.4 4 0.2 1.9 0.5 2.8 2 5.7 1.5 2.7 1.3 1.9 3.3 2.1 1.1 0.5 2.2 0.4 2.1 0 2.3-0.9 2.3-1.9 23.5-24.8 2.3-2 2.3-1.4 2.7-0.9z" id="TUN103" name="Béja">
 </path>
 <path d="M718.6 250.3l-0.3 1.6-5.4 19.3-9.3 18.6-0.5 3 0.6 2.2 0.9 7.3-4.4 26.8-5.7 0.6-2.2 0.6-2.3 0.9-9.1 5.3-1 0.8-1.4 0.1-1.3-0.5-1.9-3-0.6-1.8-0.3-1.5 0.5-2.3-2.1-3-22.2-20.4-0.6-1.3-6.7-5-9.8-4.6-4.3-1.4-2.9-0.6-2.5 1.2-2.1 0.4-1.3-0.3-1.6-0.8-2.5-2.5-1.6-1.9-4.9-9.1 3.7-0.8 4.5-3.2 12.2-12.5 2.8 0.8 2.5 0.4 3.3 0.1 5.4-0.9 1.4-0.9 1.5-1.3 3.6-4.8 1.5-1.2 1.9-0.4 3.9 0.8 2.2 0 2.8-0.5 1.7-0.2 1.7-0.5 2-1.3 3.3-3.4 3.3-2.6 1.4-2.9 3-10.8-0.6-1.5 0.8-0.7 3.7-6.8 5.3 11.7 6.4 8.9 8.6 5.3 11.7 1.4 3.3-0.9z" id="TUN104" name="Ben Arous (Tunis Sud)">
 </path>
 <path d="M670.1 128.2l-1.6 0.3-11.6 4-12.8 1.3-1.8 0.9-1.7 1.4-2.5 3.1-1.5 2.5-2.1 2.8-1.4 2.4-1.6 4.5-8.5 17.6-2 3-3.9 7.5-1.9 5.1-1 2.1-0.9 1-1.4 0.9-2 0.7-3.3 0.1-3.5-0.3-1.7-0.4-13-6.1-4.7-1.4-4.9-0.6-8.9 0.4-1.8 0.9-2.3 1.6-4.3 3.8-3.3 4-2.9 5.2-1.6 1.2-2.3 1.2-12.9 2.9-21.2 9.7-9.7 8.4-2.7 0.9-2.3 1.4-2.3 2-23.5 24.8-2.3 1.9-2.3 0.9-2.1 0-2.2-0.4-1.1-0.5-3.3-2.1-1.3-1.9-1.5-2.7-2-5.7-0.5-2.8-0.2-1.9 1.4-4 0.6-1.2 1.9-5.2 0.8-3.9 0.1-3.7-1.4-2.9-2.5-2.1-2.9-1.9-8.8-2.9-2.3-1.2-2.2-1.5-8.1-7.7-1.2-1.7-1.3-2.3-3.2-8.8-5.9-12.9-2.3-7.6-0.9-2.3-2.5-3.3-3.1-2.7-1.7-1.1-1.6-0.6-15.2 0.3-1.1-0.2-1.2-0.8-1-1.3-1.1-2.7-0.7-3.5 0.4-4.3 1.4-6.6 0.4-4.7-0.6-10.5-0.3-1.4 19.5-8 2.9-1.8 5.2-8.4 4.4-2.4 32.3-0.4 9.3-3.7 5.9-6.5 3.5-2.3 3.3 1.4 2.5 1.5 2.7-0.5 2.6-1.3 7.1-1.8 5.8-2.6 5.2-3.5 3.4-3.5 5 2.8 4.5-0.8 9-6.2 5.1-2.7 4.2-1.1 10.7-0.2 5.4-2.2 3-0.6 2.6 1.6 1.9 2 2.5 0.9 20.9 0.6 0.6 3.8 0.1 13.9-7.6 6.1-9.2 4-5.2 7.6 0.8 2.3 3.9 8.4 1.2 1.9 1.4 1 1.5 4.3 2 1 10.7 1.5 5-1 5.4-4.5 3-4.1 2.7-5.7-0.1-5-15.6-6.4-2.4 0.3-5 1.6-2.8 0 0-1.9 6-4.1 2.3-0.7 1.5-1.4 1.9-2.3 3.7-0.6 23.8 5.4 4.4-0.4 13-5.9 2.1 0.5 3.9 6.1 17.2 2.6 8 7.3 18.1 6.6 4.7 3.9-7.8 2.1-3.7 1.5-3.4 2.5-1.3-5-6.8-0.9-7.8 2-4.4 3.9 1.8 5 6.4 2.5 7.4 0.3 4.7-1.3 1.7 2.6z" id="TUN105" name="Bizerte">
 </path>
 <path d="M375.3 335.6l-3.9-1.1-4.1-0.4-4.7 0.9-10.4 4-21.2 7.3-58.4 3-2.2 0.4-9.3 3.4-22 11.4-4.9 0.3-15.3-1.3-3.9 0.4 0.6-4.2 0.4-12.5-0.5-5.8-2.1-5.6-3.7-2.3-4.6-1.3-4.8-2.5-21.2-2.7-10-4.2 0.5-10.4 5.8-7.1 7-4.5 15.8-6 29.6-18 5.5-6.1 5.5-10.7 2.1-10.7-4.9-6.2-8.5-4.5 1.5-4.9 7.6-3.7 9.4-1.2 9.2 0.7 8.4-1.8 16.9-6.8 4.4-3.2 0.2-3.7-8.4-12.9-0.8-3.1 0.2-3.7-0.8-8.1 4.6-1.9 17.3-7.2 6-1.2 20.9 0 5.4-1.9 10.1-8.6 7.4-3.5 10.6 11.3 1.6 3.2-0.8 0.7-4.6 1.7-1.6 0.8-0.8 0.9-0.6 2.2 0.3 1.5 0.7 1.3 9.3 10.7 4.6 7.6 0.9 2.5 0.2 2-1.6 2.3-9 7.5-1 1-1.1 2.5-0.3 1.7-0.1 2.7-0.8 3.3-1.2 2.6-0.5 1.7 0.3 1.3 0.9 1.2 2.5 1.8 1.3 0.5 14 2.3 3.7 2.1 2.3 1.9 1.3 1.6 0.6 2.7-1.6 15.3 0.5 5.7 0.7 2.1 0.9 1.7 1.9 2.5 8.2 22 1.5 5.6 0.3 3.5-0.8 1.1-3.9 4.4-1.6 2.2-0.9 2.2-0.5 2.9-0.2 8.7-0.6 2.2-0.9 1.1-1.2 0.8-4.6 2.6z" id="TUN106" name="Jendouba">
 </path>
 <path d="M746.2 365.7l-2.6-5.6-1.8-1.7-1.4-0.1-1.9 0.4-3.2 1.5-1.8 1.2-1.7 0.7-1.6 0.1-2.5-1.4-1.6-1.2-4.9-1.1-15.1 2.7-1.5-0.2-1.9-1-0.9-0.9-1.4-2.3-0.7-6.2 0.5-21.5 4.4-26.8-0.9-7.3-0.6-2.2 0.5-3 9.3-18.6 5.4-19.3 0.3-1.6 5 0.2 12.4-6.3 7.6-1.9 4.7-4.9 3.5-15.6 3.5-12.3 4.4-3.9 5.2-1.1 11.4 0.8 10.2-2 9.5-3.7 12.2-8.8 7.5-7.9 2.2-1.1 1-2.8 0.7-1.6 14.1-11.5 2-2.5 0.6-3.4-0.9-2.1-0.4-2 2.2-3.1 5.3-2.6 12.3-1.3 9.5-7.2 5-0.8 4.3 2.2 2.3 5.5-0.3 2.6-2.6 3.7-0.6 3.2 0.6 3.4 2.4 4.4 0.5 2.7 0.9 2.1 4.2 6.4 1.6 3 0.6 3 0.4 6.6 0.6 2.9 1.2 2.4 1.6 2.8 1.8 2.2 1.3 1 1.4 1.7 2.9 4.6-1.3 5-3.4 4.8-9.8 4-13.3 11.3-7.3 13.5-10.4 15.3-17.2 32.1-13.1 33-6.3 8.5-20.3 5.3-23.6 13.4-8.5-2.3-8.5 6.3-5.2 8.2z" id="TUN107" name="Nabeul">
 </path>
 <path d="M678.8 231.4l0.6 1.5-3 10.8-1.4 2.9-3.3 2.6-3.3 3.4-2 1.3-1.7 0.5-1.7 0.2-2.8 0.5-2.2 0-3.9-0.8-1.9 0.4-1.5 1.2-3.6 4.8-1.5 1.3-1.4 0.9-5.4 0.9-3.3-0.1-2.5-0.4-2.8-0.8 0.7-3.2-0.1-2.6-1.2-2.3-2.1-2-4.4-3.2-1.5-2.1-0.7-3.6-1.2-1.4-1.9-1.3-1.3-1.3-0.4-1 0.2-1.1 2.2-1.6 4.6-2.5 10.3-4 30.3-16.7 34.4-11.1 1.1-0.7 2.4 3.5-1.2 3.6-5.6 5.6-2.4 6.2-2.6 2.5-3.3 0.5-3.2-2.8 1.8-4.6-2.3-1.3-4.2 0.7-7.9 2.6-2.4 1.8-4.2 6-1.2 4.5 3.5 1.5 7.6 0.2 3.2 1.7 1.6-1.6z" id="TUN108" name="Tunis">
 </path>
 <path d="M373 561.2l-12.1-0.8-42-17.9-19.9-5.6-2.4-0.2-2 0.7-2.7 1.6-5.5 4.4-2.4 2.3-1.5 1.8-1.5 3.5-0.8 2.8-0.6 2.5-1 12.4-0.7 3.9-0.6 2.1-1.3 2-0.7 0.8-5.2 0.7-11.3-0.7-2.8-0.9-10.7-5.7-2.3-0.6-2.2-0.1-2.1 0.8-2.9 1.6-8.7 6.6-4.2 4-3.1 1.3-7.3 0.7-4.4 0.6-0.9-9.2-4.2-9.9-11.9-19.7-2.9-10.5-1.1-12.8 1.4-24 6.2-22.4 0.8-16.7 5.1-22.2 2.8-5.1 2.2-5.7-0.6-5.4-1.9-5.7-1.1-6 1.1-12.5 11.6-32.5 0.3-1.6 3.9-0.4 15.3 1.3 4.9-0.3 22-11.4 9.3-3.4 2.2-0.4 58.4-3 21.2-7.3 11.4 17.4 3 6.2 0.3 1.4 0.1 2.3-0.3 2.3-1.6 3.5-0.8 1.2-0.7 1.7-0.6 2-0.2 4 0.3 2.2 0.5 1.7 2.5 4.2 6.3 7.8 4.8 7.9 1.7 4.2 0.3 2.5 0 4.3-0.5 6.3 0.1 2.2 0.4 4.1 0.8 2.1 1 1.6 3.2 2.3 15 7.7 1.9 1.8 2.1 2.6 3.8 6.1 1.4 3 0.8 2.5-0.3 5.3-1.3 8.2-1.7 6.7-1.4 3.4-1.3 2.2-5.9 6.5-3.5 5.4-0.9 2.2-0.8 4.5-0.7 2.6-0.9 2.4-1.4 2.5-8.7 7.3-0.9 1-0.8 1.5-0.6 2-0.3 2.5 0 11.9-1.1 11.2-0.3 2.2-3.4 11.6z" id="TUN109" name="Le Kef">
 </path>
 <path d="M373 561.2l15.1 21.6 4.6 5.3 2.1 0.5 2.2-0.4 3.3-1.4 2.2-0.4 1 0.1 9.7 4.5 2.3 1.5 1.5 1.5 2.9 6.9 1.8 2.9 1.4 1.3 1.4 0.8 6.1 1.1 5 2.5 8.9 5.4 2 1.6 1.9 2 1.4 2.1 1.6 3.4 0.6 2 0.3 2.1-0.5 5.2-1 4.3-0.9 1.8-1.3 2-2.8 3.1-3.3 3.1-8.5 5-2.4 1.8-2.1 2.2-1 1.6-0.9 2-2.8 8.2-2.1 3-3.8 3.3-2.4 1.6-1.3 1.5-1.4 2.1-3.8 9.5-1.1 4.6-0.2 3.4 0.5 1.9 1.1 1.5 2.9 1.9 18.3 5.8 2.6 1.4 1.1 0.8 1.5 2.2 0.6 2.6-0.1 3.2-2.1 12.6-0.2 3.6 0.3 5.2 0.5 3.1 1.1 3 2 4.7 0.4 1.5 0 2-0.5 2-1.1 1.4-1.8 1.7-6.3 3.6-12.3 3.9-9.6 5-1.3 0.2-2-0.3-4.2-1.2-1.4 0.6-1.4 1.3-2.4 3.3-1.8 3.6-2.3 5.3-1.5 2.4-8 9-1.6 2.4-0.7 1.8 0.3 1.2 1.2 2.3 1.9 2 3.5 1.9 0.8 0.8 0.4 1-2.2 2-59.9 34.6-7.2 3.9-4.6 1.7-11 1.6-2.2 0.7-25 12.6-2.5 1.6-2 2-1 1.9-1.4 5.5-0.8 2.2-2.1-0.1-3.4-1.3-17-9.7-3.4-2.5-26.7-8.9-4.9-2.7-3-2.6-3.4-1.7-9.1-1.1-3-0.3 1.9-2.7 0.7-4-4.5-30-0.5-11.1 2.5-11.6 5.8-15.9 4.3-22 3.3-10.5 11.5-12.8 14.8-22.8 2.4-5.9-8.4-6.6-10.2-3.1-9.2-4.6-5.7-10.6-1.5-12.3 0.5-11 2.6-10.4 8.8-21.3 0.1-8.9-2.4-25.1 4.4-0.6 7.3-0.7 3.1-1.3 4.2-4 8.7-6.6 2.9-1.6 2.1-0.8 2.2 0.1 2.3 0.6 10.7 5.7 2.8 0.9 11.3 0.7 5.2-0.7 0.7-0.8 1.3-2 0.6-2.1 0.7-3.9 1-12.4 0.6-2.5 0.8-2.8 1.5-3.5 1.5-1.8 2.4-2.3 5.5-4.4 2.7-1.6 2-0.7 2.4 0.2 19.9 5.6 42 17.9 12.1 0.8z" id="TUN110" name="Kassérine">
 </path>
 <path d="M546.8 995.1l3 4.6 2.1 2.1 2.3 1.2 4.1 1.5 4.1 0.7 5.4-0.4 4.3-1 2.1-0.3 4.1 0.1 2.2 0.7 1.8 1.1 1.9 2.4 3 4.8 3.8 3.6 4.5 3.3 4.3 2.3 5.6 0.9 2-0.1 1.2-0.4 1-0.8 0.6-2.1-0.1-3.4 0.5-2.6 1.1-1.1 1.5-0.1 0.9 0.6 5.2 4.7-1.2 0.8 2.3 5 0.9 5.9 0 12.4 0.8 5.4 3.5 11.4 0.8 5.5 2.3 9.6 5.5 11 22.5 32.3 2.3 2.4 3.5 1.9 35 35 9.1 5.5 19.2 8.4 3.5 0.8-6 4.4-15.2 18.8-1.8 2.7-0.9 2.4-13.6 21.6-5.2 10.6-1.7 1.8-1.4 1-16.2 4.8-7.9 3.4-28.1 23.4-2.7 1-18.1 4-7.2 3.2-2.1 0.6-4.2 0.1-13.4-1.2-4.5 0.8-10.3 3.3-2.3 0.3-2.2-0.1-6.4-0.9-4.5-0.1-9.8-10.6-3.4-4.5-9.7-18.5-3.3-4.6-19.3-17.9-0.8-1.5-0.5-1.8 0.1-2.6 0.9-3.2 5.8-9.1 2.2-5.4 0.6-3.4-0.3-1.6-0.9-1.8-2.1-3.1-11.6-12.3-1.3-0.7-2.1-0.2-3.3 0.7-2.3-0.4-2.2-1.4-1.8-2-3.3-6.3-1.5-2.3-1-1.1-2.1-1.7-2.5-1.4-10.8-4.5-2-1.6-0.8-1-12.8-22.5-6.5-14-3.9-10.6-3-11-2-13.1-0.3-12.6 1.5-12 0.6-2 1.1-2 1.7-2 4.5-4 9.2-6.7 4.3-4.3 1.2-2.1-0.3-1.2-1.1-1.3-11.2-6.8-1.3-1.2-4.2-4.5-2.4-3.8-1.5-5 15-6.6 5.1-1.3 27.6 3.4 2.5 0 1.9-0.3 10.1-5.6 4.5-1.5 4.3-2.2 7.3-6.2 3.2-2 9.8-3.3 2.5-0.4 2 0 2.3 1 4.8 3.1 2.4 1.9 1.6 2.1 1.2 2.4 0.8 2.5z" id="TUN111" name="Gabès">
 </path>
 <path d="M508.9 994l-4.3 2.2-4.5 1.5-10.1 5.6-1.9 0.3-2.5 0-27.6-3.4-5.1 1.3-15 6.6-32.5 5.2-3.8-0.3-4.3-1.5-2.2 0.5-9.6 3.7-5.5 2.7-1.8 2.1-0.7 1.1-0.7 2.2-0.3 2.2-0.1 6.5-0.7 2.3-1.6 2-1.6 0.8-1.6 0.1-15.3-1.6-9.4-2.5-1.8 0-2.1 0.4-8.7 3.8-42 3.9-13.2-2.8-9.3-0.8-53.6 3.2-1.1-1-1.2-1.9-2.2-7-1-4.1-0.6-1.4-1-1.6-3.2-3.3-4.2-3.2-1.4-0.9-18.4-6.3-9.1-0.9-1.1-0.4-2.2-1.7-2-3-3-5.2-3.6-5.3-2.1-2.3-4.5-4.3-17.9-11.9-0.8-1.2-0.1-1.7 1.5-3.1 1.3-2.1 8.7-10.7 1.1-1 2.3-0.7 11.7-1.5 1.2-0.6 0.7-0.9 0.1-1.4-1.2-2.2-0.9-1.3-8.6-8.5-0.5-1.7 0-2.3 4-15.4-0.1-2.9-1.9-5.5-1.1-1 10.1-9 5.8-3.5 1.9-2 1.1-2.1 1.7-5.1 1.5-2.5 8.8-5.5 1.9-3.4-6.3-9.9 0.7-4.6 2.8-4.5 7.9-8.3 0.3-0.5 3 0.3 9.1 1.1 3.4 1.7 3 2.6 4.9 2.7 26.7 8.9 3.4 2.5 17 9.7 3.4 1.3 2.1 0.1 0.8-2.2 1.4-5.5 1-1.9 2-2 2.5-1.6 25-12.6 2.2-0.7 11-1.6 4.6-1.7 7.2-3.9 39.5 15.8 23.5 0.2 25.3 4.7 15 8 1.9 0.8 1.5 0.3 1-0.1 2.1-0.8 3.5-1.8 1.6-0.7 2.3-0.3 1.2 0.5 0.7 0.9-0.2 2.4-5.8 15-0.5 2.3-0.2 2.4 0.1 1.5 0.5 2.4 1.5 3.9 0.9 1.7 2.7 3.7 5.2 5.6 6.5 5.6 2.3 1.6 1.8 1 15.4 5.7 1.9 1.3 2.1 2.3 3.6 5.7 1.4 1.8 2 2 6.4 5 1.7 1 11.5 5.6 2.8 1.9 1.7 1.7 0.6 2.2-1.1 35z" id="TUN112" name="Gafsa">
 </path>
 <path d="M483.4 626l6.7 8.7 1.8 3.7 0 2-1.2 9.4-1 3.6-1.6 9.1 0.2 1.8 1.1 2.2 1.1 1.5 18.4 17.2 1.6 0.9 4.3 1.1 2.7 0.1 3.4-0.4 1.5 0.2 1.4 0.6 15.1 15.9 0.7 1 2 4.3 1.6 2.1 2.2 2.4 2 1.4 2.3 1.4 6.9 2.6 17.9 3.6 21.9 7 2.4 0.3 1-0.2 12.2-4.4 1.5 1 1.4 2.3 8.6 30.4 1.3 2.5 4.6 6.5-19 43-28.1 46.4-5.5 11.8-1.7 4.4-0.7 2.6-0.6 4.1 0 3 1.4 6 0.9 2 1.5 1.1 26.4 3.2 5.3 1.5 19.8 10 1 0.9 1.2 1.5 0.3 2.4-0.8 5.3-1.3 5.1-1.4 3.3-1.7 2-1 0.9-11.7 6-2.2 1.9-3.7 4.2-1 0.9-2.4 0.7-5.5-0.1-3.3 0.5-2 1-1.6 1.1-9.1 8-2.3 1.6-4.8 2.6-14.6 5-6.9 3.7-3 2.9-2.3 2.8-0.9 1.6-0.3 1.4 1.3 2 4.1 3.6 1.6 2.2 1.4 2.3 1.7 4.1 0.8 3.5 0.2 3.2-0.4 1.7-0.9 1.1-2 0.7-2-0.2-2-0.8-4.8-2.4-0.8-2.5-1.2-2.4-1.6-2.1-2.4-1.9-4.8-3.1-2.3-1-2 0-2.5 0.4-9.8 3.3-3.2 2-7.3 6.2 1.1-35-0.6-2.2-1.7-1.7-2.8-1.9-11.5-5.6-1.7-1-6.4-5-2-2-1.4-1.8-3.6-5.7-2.1-2.3-1.9-1.3-15.4-5.7-1.8-1-2.3-1.6-6.5-5.6-5.2-5.6-2.7-3.7-0.9-1.7-1.5-3.9-0.5-2.4-0.1-1.5 0.2-2.4 0.5-2.3 5.8-15 0.2-2.4-0.7-0.9-1.2-0.5-2.3 0.3-1.6 0.7-3.5 1.8-2.1 0.8-1 0.1-1.5-0.3-1.9-0.8-15-8-25.3-4.7-23.5-0.2-39.5-15.8 59.9-34.6 2.2-2-0.4-1-0.8-0.8-3.5-1.9-1.9-2-1.2-2.3-0.3-1.2 0.7-1.8 1.6-2.4 8-9 1.5-2.4 2.3-5.3 1.8-3.6 2.4-3.3 1.4-1.3 1.4-0.6 4.2 1.2 2 0.3 1.3-0.2 9.6-5 12.3-3.9 6.3-3.6 1.8-1.7 1.1-1.4 0.5-2 0-2-0.4-1.5-2-4.7-1.1-3-0.5-3.1-0.3-5.2 0.2-3.6 2.1-12.6 0.1-3.2-0.6-2.6-1.5-2.2-1.1-0.8-2.6-1.4-18.3-5.8-2.9-1.9-1.1-1.5-0.5-1.9 0.2-3.4 1.1-4.6 3.8-9.5 1.4-2.1 1.3-1.5 2.4-1.6 3.8-3.3 2.1-3 2.8-8.2 0.9-2 1-1.6 2.1-2.2 2.4-1.8 8.5-5 3.3-3.1 2.8-3.1 1.3-2 0.9-1.8 1-4.3 0.5-5.2 13-3.8 4.6 0 13.5 1.7z" id="TUN113" name="Sidi Bou Zid">
 </path>
 <path d="M884.6 877l-9.8 7.8-4.7-1-13-6.4-4.7-3.2 5.6-4.5 27.9 0.2 2.3 3.4-3.6 3.7z m45.1-34.4l5.9 6.1-1.9 4.1-23.8 10.1-12.3 7.5-4.5 1.8-2.1-5.1 3.4-4 4.1-3.9 4.4-6.4 0.6-4.1-0.3-1.9 0.2-2.8 2-1.1 0.5 2.9 3.7 2.4 5.8-1.1 0.6-6.6-1.7-3.5 1.9-4 2.9-2.7 2-3.2 2.2-3.2 4 2.3 7 1.1 1.2 2.7-6.4 2.2-0.9 1.8-1.5 1.9-0.6 3.6 2.2 0.9 1.4 2.2z m-64.7-98.4l1.6 8.5-1 9-8.3 10.4-9.4 4.8-6.9 7.7 1.8 7-2 6.2-0.1 11.8-10 7.3-2.1 2.4-1.6 1.3-1 1.8 2.7 5.9 1 4-8.9 4.2-5.8 4.3-7.8 8.7-3.8 7.8-4.8 4.4-2.3 5.3-4.2 4.8-4 2.6-16.3 5.3-2.2 1.4-0.9 2.1-0.4 3.1-1.2 3.6-1.9 3.1-0.4 5.8-1.7 3.3-0.4 5.3-3.8 3.6-5.4 2.7-22.8 3.4-8.4 4.7-13 21.7-11.8 3.1-2.4-0.2-2.2-1.1-2.8-0.2-2.9 1.1-1.5 1.5-1 1.8-5.2 7-2.3 2.1-3.2 0.8-11.6 5.1-4.9 3.9-9.7 3.9-6 6.4-3.1 9.2-8.7 17.7-5.2 8.4-3.4 1.2-2.1 2.2-5.2-4.7-0.9-0.6-1.5 0.1-1.1 1.1-0.5 2.6 0.1 3.4-0.6 2.1-1 0.8-1.2 0.4-2 0.1-5.6-0.9-4.3-2.3-4.5-3.3-3.8-3.6-3-4.8-1.9-2.4-1.8-1.1-2.2-0.7-4.1-0.1-2.1 0.3-4.3 1-5.4 0.4-4.1-0.7-4.1-1.5-2.3-1.2-2.1-2.1-3-4.6 4.8 2.4 2 0.8 2 0.2 2-0.7 0.9-1.1 0.4-1.7-0.2-3.2-0.8-3.5-1.7-4.1-1.4-2.3-1.6-2.2-4.1-3.6-1.3-2 0.3-1.4 0.9-1.6 2.3-2.8 3-2.9 6.9-3.7 14.6-5 4.8-2.6 2.3-1.6 9.1-8 1.6-1.1 2-1 3.3-0.5 5.5 0.1 2.4-0.7 1-0.9 3.7-4.2 2.2-1.9 11.7-6 1-0.9 1.7-2 1.4-3.3 1.3-5.1 0.8-5.3-0.3-2.4-1.2-1.5-1-0.9-19.8-10-5.3-1.5-26.4-3.2-1.5-1.1-0.9-2-1.4-6 0-3 0.6-4.1 0.7-2.6 1.7-4.4 5.5-11.8 28.1-46.4 19-43 1.9-3.7 4.6-7.2 12.8-14.9 9.7-8.6 5.2-3.4 3-1.2 6.1-0.6 28.1 4.9 2 0.6 1.2 0.7 6.9 4.8 2 1.1 3.3 0.1 3.4-0.9 27.1-12.9 4.8-3.5 4.2-4 1.3-2 0.4-1.4-0.2-2 0.2-2.3 1.2-1.9 4.6-2.7 1.1-0.9 1.2-2.1 0.5-2 1.2-1.7 2-0.6 21.8 6.4 3.1 0.2 2.4-1.4 2.3-2.1 0.9-1.1 1.6-2.4 3.8-8.2 1.1-0.3 1.5 0.8 3 3.6 2.4 4.5 1.8 10.6 0.9 3.3 3.4 9.1 1.2 2.5 1.4 1.2 1.9 0.9 3.4 0.2 2-0.5 1.4-0.8 3.1-4.3 0.9-1 1.3-0.1 1.7 0.9 2.8 3.1 2.6 3.6 6.8 11.7 3.5 2.1 11.5 2.2 0.3 0z" id="TUN114" name="Sfax">
 </path>
 <path d="M375.3 335.6l19.9 19.2 6 4 2.5-0.5 14.1-5.2 3.5-0.5 3.3 0 1.9 0.4 1.6 0.7 4.3 3 12.7 7 3.1 0.6 2-0.4 9.7-17.7 2.9-4 0.9-1 2-1.7 2.2-1.1 7.3-1.3 14-0.9 3.1 0.2 2.3 0.8 3.3 1.8 2.2 1.5 5.4 5.7 1.5 1.1 2.2 1.3 2.9 0.5 2.1-0.4 2.2-0.9 10.5-5.7 4-1.7 5.4-1.2 14.7-1.6 3.5 6.6 1.1 5.8-0.3 3.8-2.5 7.8-2 3.6-3.3 4.6-4.9 5.9-4.8 4.5-16 10-6 2.4-1.3 0.8-1.9 1.8-0.3 1.4 0.3 1.4 0.8 1.2 9 8.6 2.5 1.9 2.6 1.6 11 2.9 12 4.5 2.4 1.5 1 0.8 1 2 1 3.1 1.3 6.6 0.4 5.4-0.7 2.5-0.8 2.4-1.3 2.4-4.4 6.2-53.3 44.1-3.3 3.9-1.8 2.6 0 2.4 1.8 7.2 0.4 2.5 0.1 2.6-0.6 3.7-3.5 9.5-0.3 2.4 0.4 3 0.6 1.7 1.5 2.4 1.8 2.3 1.6 1.7 0.8 1.2 0.6 1.5-0.1 2.7-1.7 1.8-6.2 1.4-4.6 2-10.3 6.6-2.6 0.8-2.5 0.3-2.7-0.1-3-0.5-17.1-5.7-1.6-0.1-1.8 0.4-2.6 1.4-1.1 1.3-0.3 1.3 0.3 1.3 1 2.2 32.8 40.3 9.7 18.6 0.6 3.7-13.5-1.7-4.6 0-13 3.8-0.3-2.1-0.6-2-1.6-3.4-1.4-2.1-1.9-2-2-1.6-8.9-5.4-5-2.5-6.1-1.1-1.4-0.8-1.4-1.3-1.8-2.9-2.9-6.9-1.5-1.5-2.3-1.5-9.7-4.5-1-0.1-2.2 0.4-3.3 1.4-2.2 0.4-2.1-0.5-4.6-5.3-15.1-21.6 3.4-11.6 0.3-2.2 1.1-11.2 0-11.9 0.3-2.5 0.6-2 0.8-1.5 0.9-1 8.7-7.3 1.4-2.5 0.9-2.4 0.7-2.6 0.8-4.5 0.9-2.2 3.5-5.4 5.9-6.5 1.3-2.2 1.4-3.4 1.7-6.7 1.3-8.2 0.3-5.3-0.8-2.5-1.4-3-3.8-6.1-2.1-2.6-1.9-1.8-15-7.7-3.2-2.3-1-1.6-0.8-2.1-0.4-4.1-0.1-2.2 0.5-6.3 0-4.3-0.3-2.5-1.7-4.2-4.8-7.9-6.3-7.8-2.5-4.2-0.5-1.7-0.3-2.2 0.2-4 0.6-2 0.7-1.7 0.8-1.2 1.6-3.5 0.3-2.3-0.1-2.3-0.3-1.4-3-6.2-11.4-17.4 10.4-4 4.7-0.9 4.1 0.4 3.9 1.1z" id="TUN115" name="Siliana">
 </path>
 <path d="M763.7 621.7l28.4 9.5 16.7 3.3 9.2 0.4 2.4-0.3 1.7-0.4 0.7-0.9 2-4.8 2.8-4.3 2-2.4 3.8-3.7 5.4-4 5.5-3.1 20.3-7.6 0.2 2.3 2.2 6.5 3.7 4.6 11.2 3.5-6.6 6-1.8 8.1-1.2 7.5 0.9 13-3 6.2 1.3 10.9 5.8 9.3 8.6 10.9 5.1 4 6.1 2.8 3.3 1.8-0.4 5.8-6.7 0.2-4.9 3.7-4.7 9.5-7.2 6.1-3.4 6.7-3.4 7.2-4.7 4.2-0.3 0-11.5-2.2-3.5-2.1-6.8-11.7-2.6-3.6-2.8-3.1-1.7-0.9-1.3 0.1-0.9 1-3.1 4.3-1.4 0.8-2 0.5-3.4-0.2-1.9-0.9-1.4-1.2-1.2-2.5-3.4-9.1-0.9-3.3-1.8-10.6-2.4-4.5-3-3.6-1.5-0.8-1.1 0.3-3.8 8.2-1.6 2.4-0.9 1.1-2.3 2.1-2.4 1.4-3.1-0.2-21.8-6.4-2 0.6-1.2 1.7-0.5 2-1.2 2.1-1.1 0.9-4.6 2.7-1.2 1.9-0.2 2.3 0.2 2-0.4 1.4-1.3 2-4.2 4-4.8 3.5-27.1 12.9-3.4 0.9-3.3-0.1-2-1.1-6.9-4.8-1.2-0.7-2-0.6-28.1-4.9 0.4-11.5-0.3-3.9-1.3-3.3-5.9-8.6-1.1-2.1-0.6-2-0.2-1.5 0-2.9 0.8-8.3-0.1-3-0.6-4.8-0.6-2.2-0.7-2-2-4.2-1.1-3.3 0.4-2.4 1-3.4 7.6-18.8 2.7-4.5 5.1-6.4 1.1-2.1 0.2-2.3-0.2-2.3-3.7-9.9-0.1-1.2 0.3-1.4 0.7-1.4 1.6-2.3 4.7-3.2 10.7-3.6-1.8 7.1-0.3 2.5 0.4 3.1 0.6 1.4 1.9 2.2 5.7 4.4 2.9 3.5 1.4 0.7 1.7 0.4 7.7-1.8 2.3 0.1 8.6 2.5 2.6 1.5 0.9 1.2 1.1 2.8 0.4 5.6 0.4 1.6 0.8 1.2 1.2 1 14.2 6.3 1.4 0.3 1.5-0.2 1.4-0.5 1.2-1.4 1.1-1.8 1.3-3.4 0.7-1.6 1.1-1.5 6-3.2 1.5-2.8 2.3-8.9z" id="TUN116" name="Mahdia">
 </path>
 <path d="M864.6 603.4l-20.3 7.6-5.5 3.1-5.4 4-3.8 3.7-2 2.4-2.8 4.3-2 4.8-0.7 0.9-1.7 0.4-2.4 0.3-9.2-0.4-16.7-3.3-28.4-9.5-2.2-2.1-5.8-2.3-1.5-0.2-1.3 0.4-1 0.8-1 1.7-0.8 2.8-1.9 3.4-1.6 0.9-1.9 0.4-5-0.6-2.1-0.7-2.1-1.7-1.5-2.8 0-1.9 0.4-3.3 0.6-1.5 1-0.9 7.8-3.5 2.2-1.5 0.9-1.2 0.6-1.4-0.1-2.1-0.6-1.4-2.3-3.3 0-1.2 0.7-1.3 2.1-1.6 2.7-1.2 5.5-1.2 8.7-3.1 4-2.5 1.9-1.6 1.2-2.2 1.1-3.2 1.5-9.8 0.1-2.2-0.9-9.4-0.1-5.6 0.1-1.3 2.4-4.5 9.6-11.8 0.6-0.8 0.6 0.6 4.7 2.5 7.5 2.9 14.7-5.2 2.5 0.6 2.2 1.4 4.5 4.2-2.7 4-1.4 5.9 1.2 6.1 2.8 4.4 9.9 4.7 22.1 8.7 9.8-1.1 7.1 6 3.4 7-9.3 3.7-1.2 7 0.5 4.8z" id="TUN117" name="Monastir">
 </path>
 <path d="M691.5 599.4l-10.7 3.6-4.7 3.2-1.6 2.3-0.7 1.4-0.3 1.4 0.1 1.2 3.7 9.9 0.2 2.3-0.2 2.3-1.1 2.1-5.1 6.4-2.7 4.5-7.6 18.8-1 3.4-0.4 2.4 1.1 3.3 2 4.2 0.7 2 0.6 2.2 0.6 4.8 0.1 3-0.8 8.3 0 2.9 0.2 1.5 0.6 2 1.1 2.1 5.9 8.6 1.3 3.3 0.3 3.9-0.4 11.5-6.1 0.6-3 1.2-5.2 3.4-9.7 8.6-12.8 14.9-4.6 7.2-1.9 3.7-4.6-6.5-1.3-2.5-8.6-30.4-1.4-2.3-1.5-1-12.2 4.4-1 0.2-2.4-0.3-21.9-7-17.9-3.6-6.9-2.6-2.3-1.4-2-1.4-2.2-2.4-1.6-2.1-2-4.3-0.7-1-15.1-15.9-1.4-0.6-1.5-0.2-3.4 0.4-2.7-0.1-4.3-1.1-1.6-0.9-18.4-17.2-1.1-1.5-1.1-2.2-0.2-1.8 1.6-9.1 1-3.6 1.2-9.4 0-2-1.8-3.7-6.7-8.7-0.6-3.7-9.7-18.6-32.8-40.3-1-2.2-0.3-1.3 0.3-1.3 1.1-1.3 2.6-1.4 1.8-0.4 1.6 0.1 17.1 5.7 3 0.5 2.7 0.1 2.5-0.3 2.6-0.8 10.3-6.6 4.6-2 6.2-1.4 1.7-1.8 0.1-2.7-0.6-1.5-0.8-1.2-1.6-1.7-1.8-2.3-1.5-2.4-0.6-1.7-0.4-3 0.3-2.4 3.5-9.5 0.6-3.7-0.1-2.6-0.4-2.5-1.8-7.2 0-2.4 1.8-2.6 3.3-3.9 53.3-44.1 5.2 1.9 2.2 0.5 5 0.3 21.7-3.1 8.6-0.2 7.7 4.7 2.3 1 9.7 1.8 3.4 1.8 1.7 1.4 6.6 6.6 1.2 0.7 1.5-0.1 1.5-1 1.9-3.1 0.8-2.1 0.5-1.7 1.6-10.7 0.7-2.8 1.3-1.4 2.6 3.2 1.6 0.2 1.9-0.9 3.4-3.4 1.6-2 2.1-4 4-2.8 14.6-4.9-8.1 14.9 0.1 4.4 13.5 7.2 1.3 1.3 1.4 2.1 2.2 4.2 0.8 2.2 0.3 2-2.2 13.9-2.9 11.1-1.6 4.7-0.5 1-2.6 4.2-11.6 14.6-1.3 2.3-0.3 1.1 0 1.3 0.7 2.1 27.7 56.3 2.4 3.4 1.9 3.8 3 9.8z" id="TUN118" name="Kairouan">
 </path>
 <path d="M746.2 365.7l-2.6 3.9-3.4 11.5-3.4 12.6-2.9 12.4-0.6 15.6-0.5 16 1.2 10.1 3.1 10.2 1.8 5.5 1.2 1.9 1.1 3 1.4 6.6 0.9 2.8 5.4 8.2 3.9 4.5 3.4 1.9 2.9 2.9 6.4 19.9 3.3 4 16.9 16-0.6 0.8-9.6 11.8-2.4 4.5-0.1 1.3 0.1 5.6 0.9 9.4-0.1 2.2-1.5 9.8-1.1 3.2-1.2 2.2-1.9 1.6-4 2.5-8.7 3.1-5.5 1.2-2.7 1.2-2.1 1.6-0.7 1.3 0 1.2 2.3 3.3 0.6 1.4 0.1 2.1-0.6 1.4-0.9 1.2-2.2 1.5-7.8 3.5-1 0.9-0.6 1.5-0.4 3.3 0 1.9 1.5 2.8 2.1 1.7 2.1 0.7 5 0.6 1.9-0.4 1.6-0.9 1.9-3.4 0.8-2.8 1-1.7 1-0.8 1.3-0.4 1.5 0.2 5.8 2.3 2.2 2.1-2.3 8.9-1.5 2.8-6 3.2-1.1 1.5-0.7 1.6-1.3 3.4-1.1 1.8-1.2 1.4-1.4 0.5-1.5 0.2-1.4-0.3-14.2-6.3-1.2-1-0.8-1.2-0.4-1.6-0.4-5.6-1.1-2.8-0.9-1.2-2.6-1.5-8.6-2.5-2.3-0.1-7.7 1.8-1.7-0.4-1.4-0.7-2.9-3.5-5.7-4.4-1.9-2.2-0.6-1.4-0.4-3.1 0.3-2.5 1.8-7.1-3-9.8-1.9-3.8-2.4-3.4-27.7-56.3-0.7-2.1 0-1.3 0.3-1.1 1.3-2.3 11.6-14.6 2.6-4.2 0.5-1 1.6-4.7 2.9-11.1 2.2-13.9-0.3-2-0.8-2.2-2.2-4.2-1.4-2.1-1.3-1.3-13.5-7.2-0.1-4.4 8.1-14.9 6.4-2.8 2.4-1.3 2.1-1.6 0.9-1 1-1.8 1-2.6 1.2-5 0.4-2.5 0-2-1.2-3.8 0.1-1.2 0.6-1.1 1.7-1.1 1.3-0.6 17.6-3.6 0.9-1.1 0.4-1.7-0.7-3.2-1.2-1.9-1.8-2.6 0.2-1.2 1.4-1.5 3.3-2.6 1-5.1-0.2-17.4 15.1-2.7 4.9 1.1 1.6 1.2 2.5 1.4 1.6-0.1 1.7-0.7 1.8-1.2 3.2-1.5 1.9-0.4 1.4 0.1 1.8 1.7 2.6 5.6z" id="TUN119" name="Sousse">
 </path>
 <path d="M609.8 279l4.9 9.1 1.6 1.9 2.5 2.5 1.6 0.8 1.3 0.3 2.1-0.4 2.5-1.2 2.9 0.6 4.3 1.4 9.8 4.6 6.7 5 0.6 1.3 22.2 20.4 2.1 3-0.5 2.3 0.3 1.5 0.6 1.8 1.9 3 1.3 0.5 1.4-0.1 1-0.8 9.1-5.3 2.3-0.9 2.2-0.6 5.7-0.6-0.5 21.5 0.7 6.2 1.4 2.3 0.9 0.9 1.9 1 1.5 0.2 0.2 17.4-1 5.1-3.3 2.6-1.4 1.5-0.2 1.2 1.8 2.6 1.2 1.9 0.7 3.2-0.4 1.7-0.9 1.1-17.6 3.6-1.3 0.6-1.7 1.1-0.6 1.1-0.1 1.2 1.2 3.8 0 2-0.4 2.5-1.2 5-1 2.6-1 1.8-0.9 1-2.1 1.6-2.4 1.3-6.4 2.8-14.6 4.9-4 2.8-2.1 4-1.6 2-3.4 3.4-1.9 0.9-1.6-0.2-2.6-3.2-1.3 1.4-0.7 2.8-1.6 10.7-0.5 1.7-0.8 2.1-1.9 3.1-1.5 1-1.5 0.1-1.2-0.7-6.6-6.6-1.7-1.4-3.4-1.8-9.7-1.8-2.3-1-7.7-4.7-8.6 0.2-21.7 3.1-5-0.3-2.2-0.5-5.2-1.9 4.4-6.2 1.3-2.4 0.8-2.4 0.7-2.5-0.4-5.4-1.3-6.6-1-3.1-1-2-1-0.8-2.4-1.5-12-4.5-11-2.9-2.6-1.6-2.5-1.9-9-8.6-0.8-1.2-0.3-1.4 0.3-1.4 1.9-1.8 1.3-0.8 6-2.4 16-10 4.8-4.5 4.9-5.9 3.3-4.6 2-3.6 2.5-7.8 0.3-3.8-1.1-5.8-3.5-6.6 3-7.4 7.2-10.4 1.5-4 4.5-4.9 14.4-12.1 7.5-2.4 2.4-2.2 4-9.6 4-7.3 1.4-1.6 1.3-1 2.1-0.5 2 0.1 1 0.6 1.5 1.9 1 2.2z" id="TUN120" name="Zaghouan">
 </path>
 <path d="M905.7 1575.7l15.9-29.9 4.1-4.8 4.3-3.9 4.4-3.3 4.8-2.9 11.6-4.3 3.8-1.9 8.8-6.5 2.2-2.1 1.6-2.2 0.9-2.4-0.5-1.2-1.1-0.7-2-0.1-7 1.3-1.8-0.2-1.8-0.7-2.2-1.3-64.3-53.4-0.8-1.1-0.4-1.1 0.2-2.3 2.3-9.1 0.3-3.6-1-25 0.3-2.4 0.4-2.1 3.2-8.5 1.3-4.7 0.8-5 0-2-0.7-3-1.2-2.1-2.9-2.2-3-1.6-3.1-2.1-10.4-9.5-1.8-2.2-1.5-2.4-0.7-1.5-3.2-13.7-1.5-2.4-2.5-2-67.6-31.9-5.3-1.2-11.3-1.4-4.3-1.3-2.3-1.3-2.4-1.9-1.7-2.1-0.5-2.1 1.1-1.8 4.9-1.8 0.6-0.9 0.7-3.1 2.4-4 0-2-0.7-1-2.4-0.3-18.9 2.3-8.5-1.2-2.2 0.2-2 0.6-42.9 19.1-3.2 2.2-16.7 7.2-2.2 1.4-1.7 2.3-1.1 0.8-1.7 0.6-3 0-12.5-2.5-4.5-0.3-1.5 0.5-1.7 0.8-3 2.2-3 2.7-5.1 7.3-1.8 1.6-8.3 3.5-6.1 1.7-5.3 0.8-21.1 0.5 3.4-8.1 0.7-2.1 0.3-2.1 0-22.1-0.4-2.1-1.2-1.2-2.1-1.4-4.8-1.6-2.6-0.6-1.8-0.1-2.2 0.2-2.3-0.1-4.3-1.1-5.2-1.8-4.6-4-14.2-15 4.5 0.1 6.4 0.9 2.2 0.1 2.3-0.3 10.3-3.3 4.5-0.8 13.4 1.2 4.2-0.1 2.1-0.6 7.2-3.2 18.1-4 2.7-1 28.1-23.4 7.9-3.4 16.2-4.8 1.4-1 1.7-1.8 5.2-10.6 13.6-21.6 0.9-2.4 1.8-2.7 15.2-18.8 6-4.4 7.1 1.6 16.8-2.5 18.5-5.3 15.6-8.5 4.6-1.2 5.7 10.3-0.7 20.2-7.2 6.2-3.9 1.7-3.1 3.9-1.2 5 1.4 4.6 5.8 9.9 3.3 3.7 5.2 1.6 10.3-2.2 18.5-11.4 8.8-2.6 4.2-1.8 3.9-4.6 1.8-5.5-1.6-5.1-4.1-4.9-0.7-2.5 7.3-5.8 2.8 2 3.1 0.5 2.7-1.2 1.5-3.3 1.7 0 3.9 2.6 10.3 4.8 4.3 2.8 3.2 4.1 8.5 13.1 0.8 2.8 1.3 14.7-6.6 10.5 5.1 17.9-2.1 8.5 7.1-2.2 4.8 5.1 4.9 6.5 5.6 3.2 5.9 1.4 12.5 6.4 6 2.2-1.5 1.4-1.8 0.6-24-7.9-11.8-1.3-2.9 9.2 2.4 3.5 3.9 3.2 3.9 4.2 1.6 6.3 2.3 2.9 5.4 0 10.7-2 10.4 2.3 20.6 7.7 10.9 0 4-2.9-1.4-3.9-4.1-3.5-4.4-1.5-2.8-1.9-3.4-4.3-3.8-3.9 22.2 15.8 13.5 6.4 1.8 0.4 0.2 13.1-7 27.8-0.6 4.5-0.1 16.3-4.4 19.7 1.8 30.2-3.6 30.6 0.2 16 5 11.2 16.4 16.2 5.6 10.4 0.9 12.2-4.3 9-8 7.6-17 11.5-64 30.7z m-61.7-476.6l7.3 8.8 7.8 7.2 4.7 3 5 2.3 4.2 2.7 2.9 4.1-16.2 15-4.1 1.9-1.5 1.3-1.1 2.5-2.4 9.6-1.6 0 0.8-7.8 0.8-2.5-3.8 1.3-3.1 9.3-4.4 6.7-4.1 4.6-1.5 5.3-4.1-4.2 0-5.1 1.5-4.8-4.4-6.8-4.1-2-3.9-3.5-4.2-1.3-4.6 4.6-2 4.4-4.6 1-5.6-4.5-1.6-4.4-1.5-8.1 0.2-7.8 4.7-8.3-3-12 0.1-9.1 9.1-3.4 19.8 4.3 10.7 0.7 7.8-5z" id="TUN96" name="Médenine">
 </path>
 <path d="M553.4 1276.6l14.2 15 4.6 4 5.2 1.8 4.3 1.1 2.3 0.1 2.2-0.2 1.8 0.1 2.6 0.6 4.8 1.6 2.1 1.4 1.2 1.2 0.4 2.1 0 22.1-0.3 2.1-0.7 2.1-3.4 8.1-1.2 4.2 0.2 2.9 1 1.7 2.3 2.5 9.9 7.6 5.9 6.4 1 2.1 0 1.6-1 0.6-2.2 0.9-3.1 0.8-2 1.2-0.7 0.9-0.9 2-0.2 1.2 0.3 5.3 1 9.4 0.7 2.1 1.8 3 1.3 2.5 0.3 1.6-0.1 1.4-0.5 1.1-2.8 4.6-6.1 7.3-1.2 2.3-0.7 6.1-0.4 11.8 0.2 2.5 0.3 1 9.8 17.4 1.3 3.4-0.6 1.1-0.9 0.6-2.3 0.1-1.2-0.3-2.7-1.1-6.1-3.5-26.4-21.3-7.7-9.8-3.2-2.7-2-1.2-4.5-1.6-3.7-0.9-3-0.2-7.9 0.7-6.5 1.4-5.9 2.1-5.1 3.1-9.9 8.5-2.6 1.6-6.2 2.8-286.6 59.3-4.5 1.4-0.4-0.4-2.8-9.6-2.4-29.9-3.3-40.9-3.3-9.3-24.8-38.8-23.1-36.3-5.4-3.3-5.1 1.1-5.2-0.4-5-1.5-4.7-2.5-27.1-19.6-8.9-3.1-11.7-1.1-9-2.7-6.3-6.9-3.7-13.7-0.4-38.8 4.1-2.5 47.2-23.4 150.5-121.9 13.3-16.6 19.7-35.5 42-3.9 8.7-3.8 2.1-0.4 1.8 0 9.4 2.5 15.3 1.6 1.6-0.1 1.6-0.8 1.6-2 0.7-2.3 0.1-6.5 0.3-2.2 0.7-2.2 0.7-1.1 1.8-2.1 5.5-2.7 9.6-3.7 2.2-0.5 4.3 1.5 3.8 0.3 32.5-5.2 1.5 5 2.4 3.8 4.2 4.5 1.3 1.2 11.2 6.8 1.1 1.3 0.3 1.2-1.2 2.1-4.3 4.3-9.2 6.7-4.5 4-1.7 2-1.1 2-0.6 2-1.5 12 0.3 12.6 2 13.1 3 11 3.9 10.6 6.5 14 12.8 22.5 0.8 1 2 1.6 10.8 4.5 2.5 1.4 2.1 1.7 1 1.1 1.5 2.3 3.3 6.3 1.8 2 2.2 1.4 2.3 0.4 3.3-0.7 2.1 0.2 1.3 0.7 11.6 12.3 2.1 3.1 0.9 1.8 0.3 1.6-0.6 3.4-2.2 5.4-5.8 9.1-0.9 3.2-0.1 2.6 0.5 1.8 0.8 1.5 19.3 17.9 3.3 4.6 9.7 18.5 3.4 4.5 9.8 10.6z" id="TUN97" name="Kebili">
 </path>
 <path d="M905.7 1575.7l-75.5 36.3-6.7 7.1-9.8 23-8 8-8.9 5.5-8.2 6.7-4.8 1.5-4.4-1.8-4.4-2.5-4.6-0.7-5.5 5.9-2.1 23.1-3.2 9.6-10.3 9.6-4.1 10-2.9 4.3-3.6 3.7-4 3.2-13.4 5.3-27.4-0.4-12.6 10.2-16.5 29.2-15.6 17.6-3.8 6.6-2.6 18.7 0.4 4.9 18.3 49 7.4 30.1 7.7 16.3 0.4 5.3-1.4 11 1.1 10.1 6.1 20-0.1 9.5-3.8 11.5-15.1 31.4-22.3 25.5-25.8 41.8-30.3 39.5-6.3 3.6-17.8 1.2-7.2 1.9-54.7 29-6.9-31.2-13.8-62.3-13.9-62.6-6.9-31.3-13.9-62.8-6.9-31.4-6.9-31.5-7-31.5-13.8-63.1-7-31.6-6.9-31.6-6.9-31.7-5.1-23.7-2.8-5.5-3.4-4.1-41.1-29.8-51.1-37.1-39.1-28.4-29.9-19.2-6.7-7.3 4.5-1.4 286.6-59.3 6.2-2.8 2.6-1.6 9.9-8.5 5.1-3.1 5.9-2.1 6.5-1.4 7.9-0.7 3 0.2 3.7 0.9 4.5 1.6 2 1.2 3.2 2.7 7.7 9.8 26.4 21.3 6.1 3.5 2.7 1.1 1.2 0.3 2.3-0.1 0.9-0.6 0.6-1.1-1.3-3.4-9.8-17.4-0.3-1-0.2-2.5 0.4-11.8 0.7-6.1 1.2-2.3 6.1-7.3 2.8-4.6 0.5-1.1 0.1-1.4-0.3-1.6-1.3-2.5-1.8-3-0.7-2.1-1-9.4-0.3-5.3 0.2-1.2 0.9-2 0.7-0.9 2-1.2 3.1-0.8 2.2-0.9 1-0.6 0-1.6-1-2.1-5.9-6.4-9.9-7.6-2.3-2.5-1-1.7-0.2-2.9 1.2-4.2 21.1-0.5 5.3-0.8 6.1-1.7 8.3-3.5 1.8-1.6 5.1-7.3 3-2.7 3-2.2 1.7-0.8 1.5-0.5 4.5 0.3 12.5 2.5 3 0 1.7-0.6 1.1-0.8 1.7-2.3 2.2-1.4 16.7-7.2 3.2-2.2 42.9-19.1 2-0.6 2.2-0.2 8.5 1.2 18.9-2.3 2.4 0.3 0.7 1 0 2-2.4 4-0.7 3.1-0.6 0.9-4.9 1.8-1.1 1.8 0.5 2.1 1.7 2.1 2.4 1.9 2.3 1.3 4.3 1.3 11.3 1.4 5.3 1.2 67.6 31.9 2.5 2 1.5 2.4 3.2 13.7 0.7 1.5 1.5 2.4 1.8 2.2 10.4 9.5 3.1 2.1 3 1.6 2.9 2.2 1.2 2.1 0.7 3 0 2-0.8 5-1.3 4.7-3.2 8.5-0.4 2.1-0.3 2.4 1 25-0.3 3.6-2.3 9.1-0.2 2.3 0.4 1.1 0.8 1.1 64.3 53.4 2.2 1.3 1.8 0.7 1.8 0.2 7-1.3 2 0.1 1.1 0.7 0.5 1.2-0.9 2.4-1.6 2.2-2.2 2.1-8.8 6.5-3.8 1.9-11.6 4.3-4.8 2.9-4.4 3.3-4.3 3.9-4.1 4.8-15.9 29.9z" id="TUN98" name="Tataouine">
 </path>
 <circle cx="823.5" cy="805.7" id="0">
 </circle>
 <circle cx="821.9" cy="186.8" id="1">
 </circle>
 <circle cx="499.6" cy="579.9" id="2">
 </circle>
</svg>
</div>
 
  )
}

export default MapTest