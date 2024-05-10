import eventsJSON from '../data/events.json'
import { useRef } from 'react';

const useEventsData = () => {
    const data = useRef(eventsJSON)
    const { _embedded: { events } } = data.current;


    return {
        events
    }
}

export default useEventsData