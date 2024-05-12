import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'
const Detail = () => {
  const { eventId } = useParams()
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=ZBOzG9jZAHHSllHXeI72pRLkaGCeK2AN`)
        const data = await response.json()
        setEventData(data)
      } catch (error) {
        setEventData({})
        SpeechSynthesisErrorEvent(error)

      }
    }
    fetchEventData()
  }, [])

  

  return (
    <div className={styles.container}>
   <div className={styles.mainInfoContainer}>
    <img src={eventData.images[0].url} alt="image" />

   </div>
    </div>
  )
}

export default Detail
