import React from 'react'
import './Map.scss'
import { YMaps, Map } from '@pbe/react-yandex-maps';

function MapQuest() {
    return (
        <div className='map'>
            <YMaps>
                <div >
                    <Map defaultState={{ center: [50, 80], zoom: 15, }} /* className="active__address__map" */ width='100%'
                        height='371px'
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    />
                </div>
            </YMaps>
        </div>
    )
}

export default MapQuest