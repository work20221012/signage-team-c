import PublicTransportationInfo from "./PublicTransportationInfo";
import Carousel from "./Carousel";
import SensorInfo from "./SensorInfo";

const FirstTab = () => {

  return (
    <div>
      <div className="row" >
        <div className="col">
          <PublicTransportationInfo />
        </div>
      </div>
      <div className="row" style={{marginTop: 140}}>
        <div className="col">
          <Carousel />  
        </div>
      </div>
      <div className="row" style={{marginTop: 40}}>
        <div className="col">
          <SensorInfo room='5201' />
        </div>
        <div className="col">
          <SensorInfo room='5217' />
        </div>        
      </div>
    </div>
  )
}

export default FirstTab;