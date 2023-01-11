import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "./../request/api";
import { toast } from "react-hot-toast";
import { toastDesign } from "../styles/toastPromise";

interface iAuthProps {
  children: React.ReactNode;
}

export interface iToys {
  category: string;
  description: string;
  id: number;
  img: string;
  marks: string;
  price: number;
  toy_name: string;
  userId: number;
}

interface iAuthContext {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  listToys: iToys[];
  toysPurshased: (listCart: iToys[]) => Promise<void>;
  userId: number;
  loadingPurchase: boolean;
}

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({ children }: iAuthProps) {

  const [userId, setUserId] = useState(0)

  const [logged, setLogged] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

  const [listToys, setListToys] = useState([
    {
      category: "",
      description: "",
      id: 0,
      img: "",
      marks: "",
      price: 0,
      toy_name: "",
      userId: 0,
    },
  ]);

  const [loadingPurchase, setLoadingPurchase] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN: WeeToys");

    const userIdLocal = localStorage.getItem("@USER: WeeToys");

    async function loadUser() {
      if (token && userIdLocal !== null) {
        const userId = await JSON.parse(userIdLocal);
        setUserId(userId.id)
        try {
          const request = await api.get(`/users/${userId.id}`, {
            headers: { authorization: `Bearer ${token}` },
          });

          if (request.data) {
            setIsLogged(true);
          }
        } catch (err) {
          localStorage.removeItem("@TOKEN: WeeToys");
          localStorage.removeItem("@USER: WeeToys");
          console.log(err);
          return null;
        }
      }else{
        setIsLogged(false)
      }
    }

    loadUser();

    async function getToysFromAPI() {
      try {
        const { data } = await api.get("/toys");

        const arrayToys: iToys[] = data.map((toy: iToys) => {
          return toy;
        });

        setListToys(arrayToys);
      } catch (err) {
        return null;
      }
    }

    getToysFromAPI();

  }, [logged]);

  async function toysPurshased(listCart: iToys[]){
    setLoadingPurchase(true)
  
    const token = localStorage.getItem("@TOKEN: WeeToys");

    const userId = JSON.parse(localStorage.getItem("@USER: WeeToys")!);

    let count = 0

    let oneTimeToast = 0

    let number = listCart.length

    listCart.forEach(async (toy) => {
      const {category, description, img, marks, price, toy_name} = toy
      const data = {
        category: category,
        description: description,
        img: img,
        marks: marks,
        price: price,
        toy_name: toy_name,
        userId: userId.id
      }
      
      try{
        const request = await toast.promise(api.post("/purchases_historic", data, {
          headers:{
            authorization: `Bearer ${token}`
          }
        }), {
          loading: "Validando pagamento...",
          error: "Falha na compra. Tente novamente!",
          success: "Pagamento validado com sucesso!"
        }, toastDesign)

        if(request){
          count++
        }
      }catch(err){
        setLoadingPurchase(false)
        return null
      }
      if(count !== 0){
        try{
          await api.delete(`/toys/${toy.id}`, {
            headers:{
              authorization: `Bearer ${token}`}
            })
          if(count === number && oneTimeToast === 0){
            toast.success("Compra realizada", {
              style: {
                border: "1px solid #15da4d",
                padding: "16px",
                color: "#15da4d",
                background: "#F5F5F5",
              },
              iconTheme: {
                primary: "#15da4d",
                secondary: "#F5F5F5",
              },
            })
            oneTimeToast++
          }
        }catch(err){
          return null
        } finally {
          setLoadingPurchase(false)
        }
      }
    })
  }

  return (
    <AuthContext.Provider value={{ setLogged, isLogged, listToys, toysPurshased, userId, loadingPurchase }}>
      {children}
    </AuthContext.Provider>
  );
}
