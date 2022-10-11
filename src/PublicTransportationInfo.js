import { useState, useEffect } from "react"

//const API_URL = 'http://localhost/train/metro';

const PublicTransportationInfo = () => {
  const [tranInfo, setTrainInfo] = useState(
    '南北線: 現在、平常通りに運転しています。有楽町線: 現在、平常通りに運転しています。'
  );
  
  useEffect(()=>{
    /*
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTrainInfo(data.trainInfo);
    })
    .catch(err => {
      console.log(err);
    })
    */
  }, []);

  const boxStyle = {
    position: 'absolute',
    overflow: 'hidden',
    padding: '20px 10px 10px 10px',
    fontSize: 32,
    backgroundColor: '#eee',
    width: 1040,
    height: 100
  }

  return (
    <div>
      <div style={boxStyle}>
        <div className="marquee">{tranInfo}</div>
      </div>      
    </div>
  );
}

export default PublicTransportationInfo;