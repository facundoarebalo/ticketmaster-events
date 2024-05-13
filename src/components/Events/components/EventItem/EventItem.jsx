import styles from './EventItem.module.css'
import Like from '../../../../assets/like.png'
import Dislike from '../../../../assets/dislike.png'
import useLikeEvents from '../../../../hooks/useLikeEvents'


const EventItem = ({ info, id, name, image, onEventClick }) => {

  const {isEventLiked, toggleEventLike} = useLikeEvents(id)

  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  
  const handleLikeClick = () => {
    toggleEventLike()
  }


  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
<img src={isEventLiked ? Like : Dislike} alt="Like button" className={styles.likeImage} onClick={handleLikeClick} />
      <img src={image} alt={name} width={200} height={200} />
      </div>
      <div className={styles.eventInfoContainer}>
      <h4 className={styles.eventName}>{name}</h4>
      <p className={styles.eventInfo}>{info}</p>
      <button className={styles.seeMoreButton} onClick={handleSeeMoreClick} >Ver más</button>
      </div>

    </div>
  )
}

export default EventItem
