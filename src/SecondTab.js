import { useEffect } from 'react';
import Beaujolais from './Beaujolais';
import NewsViewer from './NewsViewer';

const SecondTab = () => {
  const tabStyle = {
    fontSize: 40,
    backgroundColor: 'pink'
  }

  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(document.querySelector('.carousel'))
    carousel.cycle()
  }, [])

  return (
    <div style={tabStyle}>
      <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" data-bs-slide="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Beaujolais />
          </div>
          <div className="carousel-item">
            <Beaujolais />
          </div>
          <div className="carousel-item">
            <Beaujolais />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondTab;