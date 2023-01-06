import { useEffect } from "react";
import { createContext, useState } from "react";
import { dataToys } from "../pages/Home";

interface iCartProps{
    children: React.ReactNode;
}

interface iProductCart{
    id: number,
    name: string,
    price: number,
    img: string
}

interface iModalCart{
    listCart: iProductCart[],
    setListCart: React.Dispatch<React.SetStateAction<Array<iProductCart>>>,
    addProductToCart: (id: number) => void,
    removeProductFromCart: (id: number) => void,
    count: number,
    total: number
}

export const CartContext = createContext({} as iModalCart)

export function CartProvider ({children}: iCartProps){

    const [listCart, setListCart] = useState([{
        id: 0,
        name: "",
        price: 0,
        img: ""
    }])

    const [count, setCount] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        function counterCart(){
            let number = 0
            if(listCart[0].id !== 0){
                listCart.forEach((toy)=>{
                    number++
                })
                setCount(number)
            }else{
                setCount(0)
            }
        }

        counterCart()

        function getTotal(){
            let total = 0
            listCart.forEach((toy)=>{
                total += toy.price
            })

            setTotal(total)
        }

        getTotal()

    }, [listCart])

    function addProductToCart(id: number){
        if(listCart[0].id === 0){
            let toyFind = dataToys.filter((toy)=>{
                return toy.id === id
            })

            setListCart(toyFind)
        } else{
            let toyFind = dataToys.filter((toy)=>{
                return toy.id === id
            })

            setListCart([...listCart, ...toyFind])
        }
    }

    function removeProductFromCart(id: number){
        if(listCart[0].id !== 0 && listCart.length === 1){
            setListCart([{
                id: 0,
                name: "",
                price: 0,
                img: ""
            }])
        } else{
            let arrayFilter = listCart.filter((toy)=>{
                return toy.id !== id
            })

            setListCart(arrayFilter)
        }
    }

    return (
        <CartContext.Provider value={{listCart, setListCart, addProductToCart, removeProductFromCart, count, total}}>
            {children}
        </CartContext.Provider>
    )
}