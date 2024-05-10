import { useForm } from "react-hook-form"

const SingupForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const handleClearClick = () => {
        reset()
    }
    const handleSubmitForm = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <label>
                    Nombre
                    <input {...register('nombre', { required: true })} />
                </label>
                <label>
                    Edad
                    <input {...register('edad', { required: true })} />
                </label>
                <label>
                    Dirección
                    <input {...register('direccion', { required: true })} />
                </label>
                <label>
                    Código Postal
                    <input {...register('codigo', { required: true })} />
                </label>
                <label>
                    Teléfono
                    <input {...register('telefono', { required: true })} />
                </label>
                <div>
                    <button onClick={handleClearClick}>Clear</button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default SingupForm
