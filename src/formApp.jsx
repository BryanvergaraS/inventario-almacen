import { db } from "./firebase"
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Formulario } from "./components/form"
import { Table } from "./components/table"
import { Resumen } from "./components/resumen"
import "./assets/styles.css"

export const FormApp = () => {
    const [data, setData] = useState([])

    const obtenerDatos = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"))
        const lista = querySnapshot.docs.map((documento) => ({
            id: documento.id,
            ...documento.data()
        }))
        setData(lista)
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    const valoresIniciales = {
        producto:"",
        precio:"",
        cantidad:""
    }

    const [formData, setFormData] = useState(valoresIniciales)
    const [editId, setEditId] = useState(null)

    const agregarData = async (valores) => {
        const datosNumericos = {
            producto: valores.producto,
            precio: Number(valores.precio),
            cantidad: Number(valores.cantidad),
        }

        if(editId != null){
            await updateDoc(doc(db, "productos", editId), datosNumericos)
            setEditId(null)
        }
        else {
            await addDoc(collection(db, "productos"), datosNumericos)
        }
        setFormData(valoresIniciales)
        obtenerDatos()
    }

    const eliminarData = async (id) => {
        await deleteDoc(doc(db, "productos", id))
        obtenerDatos()
    }

    const editarData = (item) => {
        setFormData({
            producto: item.producto,
            precio: item.precio,
            cantidad: item.cantidad,
        })
        setEditId(item.id)
    }

    return(
        <div className="inventario-app">
            <header className="app-header">
                <p className="eyebrow">Almacen Donde Claudio</p>
                <h1>Inventario De Productos</h1>
            </header>

            <div className="dashboard-grid">
                <section className="panel">
                    <h2>Ingresar Productos</h2>
                    <Formulario key={editId} valoresIniciales={formData} agregarData={agregarData} />
                </section>

                <section className="panel">
                    <h2>Tabla</h2>
                    <Table data={data} eliminarData={eliminarData} editarData={editarData}/>
                </section>
               
                <section className="panel">
                    <h2>Resumen</h2>
                    <Resumen data={data} />
                </section>
            </div>
        </div>
    )
}