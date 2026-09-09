export const Table = ({ data, eliminarData, editarData }) =>{
    const eliminar = (item) => {
        const op = window.confirm("¿Desea eliminar el registro?")
        if(op)
            eliminarData(item.id)
    }

    const editar = (item) => {
        const op = window.confirm("¿Desea editar el registro?")
        if(op)
            editarData(item)
    }

    return (
        <table className="tabla-inventario">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.producto}</td>
                        <td>${Number(item.precio).toLocaleString('es-CL')}</td>
                        <td>{item.cantidad}</td>
                        <td>
                            <div className="actions">
                                <button className="ghost-btn" onClick={()=>editar(item)}>Editar</button>
                                <button className="ghost-btn danger" onClick={()=>eliminar(item)}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}