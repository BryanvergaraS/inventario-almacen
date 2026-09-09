import { useState } from "react"

export const Formulario = ({valoresIniciales, agregarData}) => {
    const [valores, setValores] = useState(valoresIniciales)
    const {producto, precio, cantidad} = valores

    const inputChange = ({ target }) => {
        setValores({
            ...valores,
            [target.name]:target.value,
        })
    }

    const guardar = (e) => {
        e.preventDefault()
        if(String(producto).trim() == '' || String(precio).trim() == '' || String(cantidad).trim() == '')
            return alert('Complete los detalles del producto')

        if(Number(precio) < 0 || Number(cantidad) < 0)
            return alert('El precio y la cantidad no pueden ser negativos')

        agregarData(valores)
        setValores(valoresIniciales)
    }

    return(
        <form className="form-inventario" onSubmit={guardar}>
            <div>
                <label>Producto</label>
                <input type="text" name="producto" value={producto} onChange={inputChange} />
            </div>

            <div>
                <label>Precio</label>
                <input type="number" name="precio" value={precio} onChange={inputChange} min="0" />
            </div>

            <div>
                <label>Cantidad</label>
                <input type="number" name="cantidad" value={cantidad} onChange={inputChange} min="0" />
            </div>

            <button type="submit" className="primary-btn">Guardar</button>
        </form>
    )
}