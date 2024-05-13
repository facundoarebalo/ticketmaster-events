import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import { Link } from "react-router-dom"

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('')


    useEffect(() => {

    }, [onSearch])
    useEffect(() => {

    }, [])
    useEffect(() => {

    }, [search])

    const handleInputChange = (e) => {
        setSearch(e.target.value)

    }

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(search)
        }

    }



    return (
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
        }}>
            <div style={{
                flex: 1, display: 'flex'
            }}>
                <p style={{
                    fontSize: 18,
                    fontWeight: 'bold'

                }}>Mi boletera</p>
            </div>

            <div style={{
                flex: 1, display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <input
                    placeholder="Busca tu evento favorito"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 4,
                        border: 'none',
                        width: 200,

                    }}
                />
                <Link to="/profile/my-info" style={{
                    marginLeft: 24,
                    color: '#fff',
                    textDecoration: 'none',
                }}>Mi perfil</Link>
            </div>

        </div>
    )

})

Navbar.displayName = 'Navbar'

export default Navbar