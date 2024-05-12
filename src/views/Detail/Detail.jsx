import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import styles from './Detail.module.css'



const Detail = () => {
  const { eventId } = useParams()
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=ZBOzG9jZAHHSllHXeI72pRLkaGCeK2AN`)
        const data = await response.json()
        setEventData(data)

      } catch (error) {
        setEventData({})
        setError(error)
        setIsLoading(false)

      }
    }
    fetchEventData()
  }, [])

  if (isLoading && Object.keys(eventData) === 0) {
    return <h1>Cargando evento...</h1>
  }
  if (Object.keys(error) > 0) {
    return <div>Error</div>

  }
  return (

    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img src={eventData.images?.[0].url} className={styles.eventImage} alt={eventData.name} />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.eventInfo}>{eventData.info}</p>
        {eventData.dates?.start.dateTime ? <p className={styles.dateInfo}>{format(new Date(eventData.dates.start.localDate), 'd LLLL yyyy H:mm', { locale: es })}hrs</p> : null}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del evento</h6>
        <img src={eventData.seatmap?.staticUrl} alt="Seatmap Event" />
        <p className={styles.pleaseNote}>{eventData.pleaseNote}</p>
        <p className={styles.priceRanges}>Rango de precios: {eventData.priceRanges?.[0].min}-{eventData.priceRanges?.[0].max} $</p>
      </div>
      <a href={eventData.url} target="_blank">
        <button className={styles.buyTicketButton}>Comprar boleto</button>
      </a>
    </div>
  )
}

export default Detail
