import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import styles from './Profile.module.css'

const Profile = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()


    const handleTabClick = (path) => {

        navigate(`/profile/${path}`)

    }

    return (
        
        <div>
<Link to="/" className={styles.homeLink}>Inicio</Link>
        <div className={styles.tabsContainer}>
            <span
                onClick={() => handleTabClick('my-info')}
                className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
                style={{
                    marginRight: 8
                }}
                >Mi Información</span>


            <span
                onClick={() => handleTabClick('liked-events')}
                className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}>Eventos Favoritos</span>

            <Outlet />
        </div>
                </div>
    )
}

export default Profile
