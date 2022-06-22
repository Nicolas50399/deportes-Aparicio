import botinesNikeCR7 from '../../assets/botinesNikeCR7.jpg';
import pelotaBasquetWilson from '../../assets/pelotaBasquetWilson.jpg';
import raquetaBabolatNadal from '../../assets/raquetaBabolatNadal.jpg';
import camisetaArgentinaMessi from '../../assets/camisetaArgentinaMessi.jpg';
import pelotasTenisWilson from '../../assets/pelotasTenisWilson.jpg';


const productos = [
    {
        id: 1,
        nombre: 'Botines Nike CR7',
        descripcion: 'Unos botines de futbol de Cristiano Ronaldo',
        precio: 6000,
        stock: 20,
        imagen: botinesNikeCR7
    },
    {
        id: 2,
        nombre: 'Pelota de Basquet Wilson',
        descripcion: 'Una pelota de basquet',
        precio: 8500,
        stock: 5,
        imagen: pelotaBasquetWilson
    },
    {
        id: 3,
        nombre: 'Raqueta Babolat Rafael Nadal',
        descripcion: 'Una raqueta de tenis profesional usada por Nadal',
        precio: 9000,
        stock: 10,
        imagen: raquetaBabolatNadal
    },
    {
        id: 4,
        nombre: 'Camiseta Argentina (Messi) ',
        descripcion: 'Una camiseta de Argentina con estampado de Messi',
        precio: 10000,
        stock: 25,
        imagen: camisetaArgentinaMessi
    },
    {
        id: 5,
        nombre: 'Pack pelotas de tenis Wilson',
        descripcion: 'Un pack con 3(tres) pelotas profesionales de tenis',
        precio: 2000,
        stock: 30,
        imagen: pelotasTenisWilson
    }
]

export default productos;

export const CallProductos = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === id))
        }, );
    })
}