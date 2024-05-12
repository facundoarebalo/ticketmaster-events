import styles from './EventItem.module.css'

const EventItem = ({ info, id, name, image, onEventClick }) => {

  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }


  return (
    <div className={styles.eventItemContainer}>
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}>
      <h4 className={styles.eventName}>{name}</h4>
      <p className={styles.eventInfo}>{info}</p>
      <button className={styles.seeMoreButton} onClick={handleSeeMoreClick} >Ver más</button>
      </div>

    </div>
  )
}

export default EventItem
