import { useEffect, useRef, useState, useCallback } from 'react'
import ReactPaginate from 'react-paginate'
import Navbar from '../../components/Navbar/Navbar'
import Events from '../../components/Events/Events'
import useEventsData from "../../hooks/useEventsData"
import styles from './Home.module.css'

const Home = () => {
    const { events, isLoading, error, fetchEvents, page } = useEventsData()
    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef()

    useEffect(() => {
        fetchEvents()
    }, [])

    const handleNavbarSearch = (term) => {
        setSearchTerm(term)
        fetchEvents(`&keyword=${term}`)
    }

    const handlePageClick = useCallback(({ selected }) => {

        fetchEvents(`&keyword=${searchTerm}&page=${selected}`)

    }, [searchTerm, fetchEvents])

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando...</div>
        }
    }
    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
            <div>
                <Events searchTerm={searchTerm} events={events} />
                <ReactPaginate
                    className={styles.pagination}
                    nextclassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )

}

export default Home
