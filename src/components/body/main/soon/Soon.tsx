import Event from "../../events/event/Event";
import { useState, useEffect } from 'react'
import axios from "axios";
import "./Soon.scss"
import { IEvent } from "../../../../models";
import { AXIOS_URL, initialEvent } from "../../../../store";

const Soon = () => {
    const [events, setEvents] = useState<IEvent[]>(initialEvent.events)

   /*  async function getEvents() {
        const response = axios.get<[]>(`http://${AXIOS_URL}/event`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJlbWFpbCI6ImFsZW5hQG1haWwucnUiLCJuYW1lIjoi0JDQu9GR0L3QsCIsInJvbGUiOiLQn9C-0LvRjNC30L7QstCw0YLQtdC70YwiLCJpYXQiOjE2OTE4OTQwNjN9.azUXyJNaPcUOybquMBTkOCXFscgyzkCtk_doFs7gM9s'
            }
        })
        let data = await response
        setEvents(data?.data)
        console.log(data?.data)
    } */
    console.log(events)
    let elements = events?.slice(0, 3).map(event => <Event event={event} />)
    /* useEffect(() => {
        getEvents()
    }, []) */

    return (
        <div >
            <div className="soon">
                <h1>Скоро</h1>
                <div className="soon__events">
                    {elements}
                </div>

            </div>
        </div>
    );
};

export default Soon;