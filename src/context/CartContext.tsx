import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { iToys } from "./AuthContext";
import { toast } from "react-hot-toast";

interface iCartProps {
  children: React.ReactNode;
}

interface iModalCart {
  listCart: iToys[];
  setListCart: React.Dispatch<React.SetStateAction<Array<iToys>>>;
  addProductToCart: (id: number) => void;
  removeProductFromCart: (id: number) => void;
  count: number;
  total: number;
  updateCartWithLogin: (userId: number) => void;
}

export const CartContext = createContext({} as iModalCart);

export function CartProvider({ children }: iCartProps) {
  const { listToys } = useContext(AuthContext);

  const [listCart, setListCart] = useState([
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

  const [count, setCount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    function counterCart() {
      let number = 0;
      if (listCart[0].id !== 0) {
        listCart.forEach((toy) => {
          number++;
        });
        setCount(number);
      } else {
        setCount(0);
      }
    }

    counterCart();

    function getTotal() {
      let total = 0;
      listCart.forEach((toy) => {
        total += toy.price;
      });

      setTotal(total);
    }

    getTotal();
  }, [listCart]);

  function addProductToCart(id: number) {
    if (listCart[0].id === 0) {
      let toyFind = listToys.filter((toy) => {
        return toy.id === id;
      });

      toast.success("Produto adicionado ao carrinho!", {
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
      });

      setListCart(toyFind);
    } else {
      let toyFind = listToys.filter((toy) => {
        return toy.id === id;
      });

      let duplicateProduct = listCart.filter((toy) => {
        return toy.id === id;
      });

      if (duplicateProduct.length !== 0) {
        toast.error(`Este produto já foi adicionado ao carrinho!`, {
          style: {
            border: "1px solid #EB5757",
            padding: "16px",
            color: "#EB5757",
            background: "#F5F5F5",
          },
          iconTheme: {
            primary: "#EB5757",
            secondary: "#F5F5F5",
          },
        });
        return null;
      } else {
        toast.success("Produto adicionado ao carrinho!", {
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
        });

        setListCart([...listCart, ...toyFind]);
      }
    }
  }

  function removeProductFromCart(id: number) {
    if (listCart[0].id !== 0 && listCart.length === 1) {
      setListCart([
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
    } else {
      let arrayFilter = listCart.filter((toy) => {
        return toy.id !== id;
      });

      setListCart(arrayFilter);
    }
  }

  function updateCartWithLogin(userId: number) {
    if (listCart[0].id !== 0) {
      let listWithoutOwnToys = listCart.filter((toy) => {
        return toy.userId !== userId;
      });
      if (listWithoutOwnToys.length === 0) {
        setListCart([
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
      } else {
        setListCart(listWithoutOwnToys);
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        listCart,
        setListCart,
        addProductToCart,
        removeProductFromCart,
        count,
        total,
        updateCartWithLogin,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
