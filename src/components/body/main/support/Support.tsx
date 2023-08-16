import "./Support.scss"
import support1 from "../../../../imgs/support1.png"
import support2 from "../../../../imgs/support2.png"

const Support = () => {
    return (
        <div>
            <div className="unusual">
                <h1>Болей за наших</h1>
                <div className="unusual__pictures">
                    <div className="unusual__pictures__item">
                        <img src={support1} alt="support1" />
                        <div className="unusual__pictures__item__text">
                            <h3>Кубок Гагарина</h3>
                            <p>матчи ХК “Автомобилист” </p>
                        </div>
                    </div>
                    <div className="unusual__pictures__item">
                        <img src={support2} alt="support2" />
                        <div className="unusual__pictures__item__text">
                            <h3>Сезон 2021-2022. Баскетбол</h3>
                            <p>Матчи “УГМК”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
