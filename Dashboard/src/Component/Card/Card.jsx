import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Card.css";

function Card(props){
    const percentage = props.percent;

    const cardstyle = {
            border: "none",
            borderRadius: "8px",
            background: props.back,
            display: "flex",
            flexDirection: "row-reverse",
            padding: "15px",
            color: "white",
            marginLeft: "15px",
            minWidth: "200px",
            boxShadow: props.shadow,
    }

    return(
        <div style={cardstyle} id='Card'>
            <div className="right">
                {props.icon}
                <span className='value'>${props.value}</span>
                <span className='time'>Last 24 hours</span>
            </div>
            <div className="left">
                <div className="progressbar" >
                    <CircularProgressbar value={percentage} text={`${percentage}%`} circleRatio={1}/>
                </div>
                <span className='cardname'>{props.title}</span>
            </div>
        </div>
    )
}

export default Card