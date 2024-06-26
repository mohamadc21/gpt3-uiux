import './possibility.css';
import possibilityImg from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="psblty section-padding" id="possibility">
      <div className="image">
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className="content">
        <a href="#">
          <h6>Request Early Access to Get Started</h6>
        </a>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <a href="#">
          <h6>Request Early Access to Get Started</h6>
        </a>
      </div>
    </div>
  )
}

export default Possibility