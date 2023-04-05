import elrond from './assets/images/Elrond.jpg'
import boromir from './assets/images/Boromir_1.jpg'
import errestor from './assets/images/Erestor.jpg' 
import hama from './assets/images/Háma_1.jpg' 
import elladan from './assets/images/elladan.png' 
import elrohir from './assets/images/elrohir.jpg' 
import faramir from './assets/images/faramir.png' 
import öin from './assets/images/Óin.jpg' 
import gandalf from './assets/images/Gandalf.jpg'
    
    
const data = [
    {
        id: 0,
        key: 1,
        img: elrond,
        status: false
    },
    {
        id: 1,
        key: 1,
        img: elrond,
        status: false
    },
    {
        id: 2,
        key: 2,
        img: boromir,
        status: false
    },
    {
        id: 3,
        key: 2,
        img: boromir,
        status: false
    },
    {
        id: 4,
        key: 3,
        img: errestor,
        status: false
    },
    {
        id: 5,
        key: 3,
        img: errestor,
        status: false
    },
    {
        id: 6,
        key: 4,
        img: hama,
        status: false
    },
    {
        id: 7,
        key: 4,
        img: hama,
        status: false
    },
    {
        id: 8,
        key: 5,
        img: elladan,
        status: false
    },
    {
        id: 9,
        key: 5,
        img: elladan,
        status: false
    },
    {
        id: 10,
        key: 6,
        img: elrohir,
        status: false
    },
    {
        id: 11,
        key: 6,
        img: elrohir,
        status: false
    },
    {
        id: 12,
        key: 7,
        img: faramir,
        status: false
    },
    {
        id: 13,
        key: 7,
        img: faramir,
        status: false
    },
    {
        id: 14,
        key: 8,
        img: öin,
        status: false
    },
    {
        id: 15,
        key: 8,
        img: öin,
        status: false
    },
    {
        id: 16,
        key: 9,
        img: gandalf,
        status: false
    },
    {
        id: 17,
        key: 9,
        img: gandalf,
        status: false
    },
   
   
]

export const duplicatedMyData = [...data, ...data];


export default data