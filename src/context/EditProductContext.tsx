import { createContext, useState } from "react"
import { toast } from "react-hot-toast";
import { iEditProductModal } from "../interfaces"
import { api } from "../request/api";
import { toastDesign } from "../styles/toastPromise";

interface iEditProductContext{
    editProduct: (data: iEditProductModal) => void;
    editProductLoading: boolean;
    openEditProduct: boolean;
    setOpenEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
    setModalInfo: React.Dispatch<React.SetStateAction<iEditProductModal>>;
    modalInfo: iEditProductModal;
}

interface iEditProductProps{
    children: React.ReactNode;
}

export const EditProductContext = createContext({} as iEditProductContext)

export function EditProductProvider({ children }: iEditProductProps) {

    const [editProductLoading, setEditProductLoading] = useState<boolean>(false)

    const [openEditProduct, setOpenEditProduct] = useState<boolean>(false)

    const [modalInfo, setModalInfo] = useState({} as iEditProductModal)

    async function editProduct(data: iEditProductModal){
        setEditProductLoading(true)
        const { toy_name, price, img, category, marks, description, id } = data
        const token = localStorage.getItem("@TOKEN: WeeToys")

        try {
            const request = await toast.promise(api.patch(`/toys/${id}`, {
                toy_name,
                price,
                img,
                category,
                marks,
                description
            },  
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }), {
                loading: "Atualizando produto...",
                success: "O produto foi atualizado com sucesso!",
                error: "O produto não foi atualizado, tente novamente"
            }, toastDesign) 
        } catch (error) {
            console.log(error)
        } finally {
            setModalInfo({
                toy_name,
                price,
                img,
                category,
                marks,
                description,
                id
            })
            setEditProductLoading(false)

            setTimeout(() => {
                setOpenEditProduct(false)
            }, 600)
        }
    }

    return (
        <EditProductContext.Provider value={{ editProduct, editProductLoading, openEditProduct, setOpenEditProduct, modalInfo, setModalInfo }}>
            {children}
        </EditProductContext.Provider>
    )
}