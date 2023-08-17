import Categories from "../../main/categories/Categories";
import "./ActiveEvent.scss"
import activeEventAva from "../../../../imgs/activeEventAva.png"
import heart from "../../../../imgs/heart.svg"
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { useLocation } from "react-router-dom";
import { IEvent } from "../../../../models";
import CategoriesList from "../../categories/categoriesList/CategoriesList";
import back from '../../../../imgs/back.svg'
import Button from "../../../../elements/button/Button";

interface ActiveEventProps {
    event: IEvent
}

const ActiveEvent = (props: ActiveEventProps) => {
    console.log(props.event)
    const location = useLocation();
    let x = location?.state?.coordinate_X
    let y = location?.state?.coordinate_Y
    return (
        <div className="container">
            <div className="desktop">
                <CategoriesList view="see" />
            </div>
            <div className="active">
                <div className="active__top__mobile">
                    <img src={back} alt="back" />
                    <div className="active__top__name">{location?.state?.name}</div>
                    <img src={heart} alt="heart" />
                </div>
                <div className="active__picture">
                    <img src={activeEventAva} alt="activeEventAva" />
                    <div className="active__picture__text">
                        <div className="active__picture__text__moderator">
                            <Button label="Редактировать" color="grey"/>
                            <Button label="Удалить" color="red"/>
                        </div>
                        <div className="active__picture__text__top">
                            <div className="active__picture__text__top__name">{location?.state?.name}</div>
                            <div className="active__picture__text__top__date">{location?.state?.date.split("T")[0]}</div>
                            <div className="active__picture__text__top__price">{location?.state?.price}</div>
                            <div className="active__picture__text__top__place">{location?.state?.place}</div>
                        </div>
                        <div className="active__picture__text__bottom">
                            <button>Купить билет</button>
                            <img src={heart} alt="heart" />
                        </div>
                    </div>
                </div>
                <div className="active__description">
                    <h1>Описание</h1>
                    <p>
                        {location?.state?.description}
                    </p>
                </div>
                <div className="active__bottom__mobile">
                    <div className="active__bottom__mobile__date">{location?.state?.date}</div>
                    <div className="active__botomm__mobile__place">{location?.state?.place}</div>
                </div>
                <div className="active__btn__mobile">
                    <Button label="Расписание и билеты" color="red" />
                </div>

                <div className="active__address">
                    <h1>Адрес</h1>
                    <YMaps>
                        <div >
                            <Map defaultState={{ center: [+x, +y], zoom: 15, }} /* className="active__address__map" */ width='100%'
                                height='371px'
                                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            />
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    );
};

export default ActiveEvent;