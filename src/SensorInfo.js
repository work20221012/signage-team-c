import { useEffect, useState } from "react";

//const BASE_URL = 'http://localhost/';

const SensorInfo = (props) => {
  const [sensorInfo, setSensorInfo] = useState({
    temperature: '23',
    humidity: '54'
  });

  useEffect(()=> {
    /*
    fetch(BASE_URL + props.room + '/sensors')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSensorInfo(data);
    })
    .catch(err => {
      console.log(err);
    })
    */
  }, [])

  const imgURL = 'https://1.bp.blogspot.com/-PTRKn50Xskk/Ut0BHXqIV2I/AAAAAAAAdSw/NrpoZ--BnVw/s400/ondokei.png'
  const imgStyle = {
    width: 300,
    height: 300,
    display: 'block',
    margin: '0 auto'
  }

  return (
    <div className="card">
      <img style={imgStyle} src={imgURL} className="card-img-top" />
      <div className="card-body">
        <p className="card-text" style={{fontSize:38}}>
          Room: {props.room} <br/>
          温度：{sensorInfo.temperature} ℃ <br/>
          湿度：{sensorInfo.humidity} % <br/>
        </p>
      </div>
    </div>
  )
}

export default SensorInfo;