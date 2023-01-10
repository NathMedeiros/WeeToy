import { createContext, useState } from "react"
import { toast } from "react-hot-toast";
import { iEditProductModal } from "../interfaces"
import { api } from "../request/api";

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
        console.log(data)
        const token = localStorage.getItem("@TOKEN: WeeToys")
        const { toy_name, price, img, category, marks, description, id } = data
        try {
            await api.patch(`/toys/${id}`, {
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
            })
            toast.success("O produto foi atualizado com sucesso!", {
                style: {
                  border: "0.0625rem solid #15da4d",
                  padding: "1rem",
                  color: "#15da4d",
                  background: "#F5F5F5",
                },
                iconTheme: {
                  primary: "#15da4d",
                  secondary: "#F5F5F5",
                },
              })
        } catch (error) {
            console.log(error)
            toast.error("O produto não foi atualizado, tente novamente", {
                style: {
                  border: "0.0625rem solid #EB5757",
                  padding: "1rem",
                  color: "#EB5757",
                  background: "#F5F5F5",
                },
                iconTheme: {
                  primary: "#EB5757",
                  secondary: "#F5F5F5",
                },
              })
        } finally {
            setEditProductLoading(false)
        }
    }

    return (
        <EditProductContext.Provider value={{ editProduct, editProductLoading, openEditProduct, setOpenEditProduct, modalInfo, setModalInfo }}>
            {children}
        </EditProductContext.Provider>
    )
}