import { useForm } from "react-hook-form"
import styles from './MyInfo.module.css'
import Swal from "sweetalert2"
import { useEffect } from "react"

const USER_DATA = 'userData'

const MyInfo = () => {

    const { handleSubmit, register, setValue} = useForm()

    useEffect(() => {
try {
    const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
setValue('nombre', userData?.nombre)
setValue('email', userData?.email)
setValue('edad', userData?.edad)

} catch (error) {
    
}
    },[])

    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data))
            Swal.fire({
                title: "Usuario actualizado",
                icon: "success"
            });
        } catch (error) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: error.message
            });
          
        }

    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
            <label className={styles.label}>
                Nombre
                <input {...register('nombre', { required: true, minLength: 1, maxLength: 50 })} className={styles.input} />
            </label>

            <label className={styles.label}>
                Email
                <input {...register('email', { required: true, min: 1, max: 50 })} className={styles.input} />
            </label>

            <label className={styles.label}>
                Edad
                <input {...register('edad', { required: true, min: 1, max: 120, valueAsNumber: true })}
                    className={styles.input}
                    type="number" />
            </label>
            <button type="submit" className={styles.submitButton}>Save</button>
        </form>
    )
}

export default MyInfo
