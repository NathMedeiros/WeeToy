import { createContext, useState } from "react"
import { iEditProductModal } from "../interfaces"

interface iEditProductContext{
    editProduct: (data: iEditProductModal) => void;
    editProductLoading: boolean;
}

interface iEditProductProps{
    children: React.ReactNode;
}

export const EditProductContext = createContext({} as iEditProductContext)

export function EditProductProvider({ children }: iEditProductProps) {

    const [editProductLoading, setEditProductLoading] = useState(false)

    function editProduct(data: iEditProductModal){
        setEditProductLoading(true)
        try {
            
        } catch (error) {
            console.log(error)
        } finally {
            setEditProductLoading(false)
        }
    }

    return (
        <EditProductContext.Provider value={{ editProduct, editProductLoading }}>
            {children}
        </EditProductContext.Provider>
    )
}