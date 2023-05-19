import {  useState } from 'react';

const OffTimer = (time:number) => {
  const [countDown,setCountDown] = useState(time)
  setTimeout(()=>{
      setCountDown(countDown - 1)
  },1000)
  const hours = Math.floor((countDown % ( 60 * 60 * 24)) / ( 60 * 60));
  const minutes = Math.floor((countDown % ( 60 * 60)) / ( 60));
  const seconds = Math.floor((countDown % (60)));

  return ( 
    <span>{hours}:{minutes}:{seconds}</span>
   );
}
 
export default OffTimer;