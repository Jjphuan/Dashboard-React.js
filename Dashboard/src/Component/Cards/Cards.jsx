import Card from "../Card/Card";
import { data } from "./carddata";
import "./Cards.css";

function Cards(){

    let isChange = false;

    function toggleShow(){
        const chart = document.querySelector(".chart");
        isChange = !isChange;

        if(isChange){
            chart.classList.add('show');
        }
        else{
            chart.classList.remove('show');
        }
    }

    return(
        <div className="cardsWrap">
            <div className="icardwrap">
                {data.map((da,i) =>
                    <div className="card"
                        onClick={toggleShow}
                        id={i}
                        key={i}>
                        <Card shadow={da.shadow}
                                value={da.value}
                                back={da.background}
                                icon={da.icon}
                                title={da.title}
                                percent={da.percentage}/>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Cards