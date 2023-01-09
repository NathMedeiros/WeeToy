import { createContext, useState } from "react"
import { toast } from "react-toastify";
import { iEditProductModal } from "../interfaces"
import { api } from "../request/api";

interface iEditProductContext{
    editProduct: (data: iEditProductModal, id: number) => void;
    editProductLoading: boolean;
    openEditProduct: boolean;
    setOpenEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iEditProductProps{
    children: React.ReactNode;
}

export const EditProductContext = createContext({} as iEditProductContext)

export function EditProductProvider({ children }: iEditProductProps) {

    const [editProductLoading, setEditProductLoading] = useState<boolean>(false)

    const [openEditProduct, setOpenEditProduct] = useState<boolean>(false)

    async function editProduct(data: iEditProductModal, id: number){
        setEditProductLoading(true)
        try {
            await api.patch(`/toys/${id}`, data)
            toast.success("O produto foi atualizado com sucesso")
        } catch (error) {
            console.log(error)
            toast.error("O produto não foi atualizado, tente novamente")
        } finally {
            setEditProductLoading(false)
        }
    }

    return (
        <EditProductContext.Provider value={{ editProduct, editProductLoading, openEditProduct, setOpenEditProduct }}>
            {children}
        </EditProductContext.Provider>
    )
}