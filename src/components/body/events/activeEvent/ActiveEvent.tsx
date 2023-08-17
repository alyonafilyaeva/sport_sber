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
import LinesEllipsis from 'react-lines-ellipsis'

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
            <div className="active">
                <div className="active__desktop">
                    <CategoriesList view="see" />
                    <div className="active__desktop__picture">
                        <img src={activeEventAva} alt="activeEventAva" />
                        <div className="active__desktop__picture__text">
                            <div className="active__desktop__picture__text__moderator">
                                <Button label="Редактировать" color="grey" />
                                <Button label="Удалить" color="red" />
                            </div>
                            <div className="active__desktop__picture__text__top">
                                <div className="active__desktop__picture__text__top__name">{location?.state?.name}</div>
                                <div className="active__desktop__picture__text__top__date">{location?.state?.date.split("T")[0]}</div>
                                <div className="active__desktop__picture__text__top__price">{location?.state?.price}</div>
                                <div className="active__desktop__picture__text__top__place">{location?.state?.place}</div>
                            </div>
                            <div className="active__desktop__picture__text__bottom">
                                <button>Купить билет</button>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                    </div>
                    <div className="active__desktop__description">
                        <h1>Описание</h1>
                        <p>
                        
                        {location?.state?.description}
                        </p>
                    </div>
                    <div className="active__desktop__address">
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
                <div className="active__mobile">
                    <div className="active__mobile__top">
                        <img src={back} alt="back" />
                        <div className="active__mobile__top__name">{location?.state?.name}</div>
                        <img src={heart} alt="heart" />
                    </div>
                    <div className="active__mobile__picture">
                        <img src={activeEventAva} alt="activeEventAva" />
                    </div>
                    <div className="active__mobile__description">
                    <p>
                    <LinesEllipsis text={location?.state?.description} maxLine={6} trimRight/>
                    </p>
                </div>
                <div className="active__mobile__text">
                    <div className="active__mobile__text__date">{location?.state?.date.split("T")[0]}</div>
                    <div className="active__mobile__text__place">{location?.state?.place}</div>
                </div>
                <div className="active__mobile__btn">
                    <Button label="Расписание и билеты" color="red" />
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default ActiveEvent;