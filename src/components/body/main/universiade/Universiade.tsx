import "./Universiade.scss"
import universiade1 from '../../../../imgs/universiade1.png'
import universiade2 from "../../../../imgs/universiade2.png"

const Universiade = () => {
    return (
        <div>
            <div className="ekat">
                <h1>Екатеринбург 300</h1>
                <div className="ekat__pictures">
                    <img src={universiade1} alt="ekaterinburg1" />
                    <img src={universiade2} alt="ekaterinburg2" />
                </div>
            </div>
        </div>
    );
};

export default Universiade;