// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_5-hRT4FC2IeeqGWB1QzH05CTsTTxA1I",
    authDomain: "juegosdigitales-f8ea2.firebaseapp.com",
    projectId: "juegosdigitales-f8ea2",
    storageBucket: "juegosdigitales-f8ea2.appspot.com",
    messagingSenderId: "335583670254",
    appId: "1:335583670254:web:482eb01434ce67fc8368ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),
            {
                nombre: prod.nombre,
                idCategoria: prod.idCategoria,
                stock: prod.stock,
                precio: prod.precio,
                img: prod.img,
                categoria: prod.categoria,
                descripcion: prod.descripcion
            })   
    });
}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}


export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}


export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id }
    return ordenCompra
}