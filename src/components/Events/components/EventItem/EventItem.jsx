import styles from './EventItem.module.css'

const EventItem = ({ info, id, name, image, onEventClick }) => {

  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }


  return (
    <div className='event-item-container'>
      <img src={image} alt={name} width={200} height={200} />
      <div className='event-info-container'>
      <h4 className='event-name'>{name}</h4>
      <p className='event-info'>{info}</p>
      <button className='see-more-button' onClick={handleSeeMoreClick} >Ver más</button>
      </div>

    </div>
  )
}

export default EventItem
