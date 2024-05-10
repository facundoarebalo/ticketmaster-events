import { useState, useEffect } from "react"

const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     console.log('1010 effect')
       
    // },[search, onSearch])

    const handleInputChange = (e) => {
        setSearch(e.target.value)

    }

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(search)
        }

    }


    return (
        <div>
            <p>Mi boletera</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    )

}

export default Navbar