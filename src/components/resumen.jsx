export const Resumen = ({ data }) => {
    const totalProductos = data.length

    const unidadesTotales = data.reduce((suma, item) => suma + item.cantidad, 0)

    const valorTotal = data.reduce((suma, item) => suma + (item.precio * item.cantidad), 0)

    return (
        <div className="resumen">
            <div className="resumen-item">
                <span className="resumen-label">Total de productos</span>
                <span className="resumen-valor">{totalProductos}</span>
            </div>

            <div className="resumen-item">
                <span className="resumen-label">Unidades totales</span>
                <span className="resumen-valor">{unidadesTotales}</span>
            </div>

            <div className="resumen-item">
                <span className="resumen-label">Valor del inventario</span>
                <span className="resumen-valor">${valorTotal.toLocaleString('es-CL')}</span>
            </div>
        </div>
    )
}