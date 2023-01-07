import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { iToys } from "./AuthContext";

interface iCartProps{
    children: React.ReactNode;
}

interface iModalCart{
    listCart: iToys[],
    setListCart: React.Dispatch<React.SetStateAction<Array<iToys>>>,
    addProductToCart: (id: number) => void,
    removeProductFromCart: (id: number) => void,
    count: number,
    total: number
}

export const CartContext = createContext({} as iModalCart)

export function CartProvider ({children}: iCartProps){

    const {listToys} = useContext(AuthContext)

    const [listCart, setListCart] = useState([{
        category: "",
        description: "",
        id: 0,
        img: "",
        marks: "",
        price: 0,
        toy_name: "",
        userId: 0
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
            let toyFind = listToys.filter((toy)=>{
                return toy.id === id
            })

            setListCart(toyFind)
        } else{
            let toyFind = listToys.filter((toy)=>{
                return toy.id === id
            })

            let duplicateProduct = listCart.filter((toy)=>{
                return toy.id === id
            })
            
            if(duplicateProduct.length !== 0){
                return null
            }else{
                setListCart([...listCart, ...toyFind])
            }
        }
    }

    function removeProductFromCart(id: number){
        if(listCart[0].id !== 0 && listCart.length === 1){
            setListCart([{
                category: "",
                description: "",
                id: 0,
                img: "",
                marks: "",
                price: 0,
                toy_name: "",
                userId: 0
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