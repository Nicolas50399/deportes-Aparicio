import botinesNikeCR7 from '../../assets/botinesNikeCR7.jpg';
import pelotaBasquetWilson from '../../assets/pelotaBasquetWilson.jpg';
import raquetaBabolatNadal from '../../assets/raquetaBabolatNadal.jpg';
import camisetaArgentinaMessi from '../../assets/camisetaArgentinaMessi.jpg';
import pelotasTenisWilson from '../../assets/pelotasTenisWilson.jpg';


const productos = [
    {
        id: 1,
        seccion: "futbol",
        nombre: 'Botines Nike CR7',
        descripcion: 'Unos botines de futbol de Cristiano Ronaldo',
        precio: 6000,
        stock: 20,
        imagen: botinesNikeCR7,
        cantidad: 0
    },
    {
        id: 2,
        seccion: "basquet",
        nombre: 'Pelota de Basquet Wilson',
        descripcion: 'Una pelota de basquet',
        precio: 8500,
        stock: 5,
        imagen: pelotaBasquetWilson,
        cantidad: 0
    },
    {
        id: 3,
        seccion: "tenis",
        nombre: 'Raqueta Babolat Rafael Nadal',
        descripcion: 'Una raqueta de tenis profesional usada por Nadal',
        precio: 9000,
        stock: 10,
        imagen: raquetaBabolatNadal,
        cantidad: 0
    },
    {
        id: 4,
        seccion: "futbol",
        nombre: 'Camiseta Argentina (Messi)',
        descripcion: 'Una camiseta de Argentina con estampado de Messi',
        precio: 10000,
        stock: 25,
        imagen: camisetaArgentinaMessi,
        cantidad: 0
    },
    {
        id: 5,
        seccion: "tenis",
        nombre: 'Pack pelotas de tenis Wilson',
        descripcion: 'Un pack con 3(tres) pelotas profesionales de tenis',
        precio: 2000,
        stock: 30,
        imagen: pelotasTenisWilson,
        cantidad: 0
    }
]

export default productos;
