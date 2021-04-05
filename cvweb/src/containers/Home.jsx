import './Home.css';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    function redirect(){
        setTimeout(function(){
            history.push('/CVWeb/curriculum');
        }, 1000)
    }
    return (
        <div id="arc_container">
            <div className="circular-progress">
                <div className="circular-progress-circle">
                    <div className="segment" style={{transform: `rotate(0deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(36deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(72deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(108deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(144deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(180deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(216deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(252deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(288deg) skew(72deg)`}}></div>
                    <div className="segment" style={{transform: `rotate(324deg) skew(72deg)`}}></div>
                </div>
                <div className='core0'></div>
            </div>
            <div className="arc_reactor">
                <div className="case_container">
                    <div className="e7">
                        <div className="semi_arc_3 e5_1">
                            <div className="semi_arc_3 e5_2">
                                <div className="semi_arc_3 e5_3">
                                    <div className="semi_arc_3 e5_4"></div>
                                </div>
                            </div>
                        </div>
                            <div className="core2" onClick={redirect}>
                                <p className='contratar'><b>CONTRATAR</b></p>
                            </div>
                    </div>
                    <ul className="marks">
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                        <li></li><li></li><li></li><li></li><li></li><li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
