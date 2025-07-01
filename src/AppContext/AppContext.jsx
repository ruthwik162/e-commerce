import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;



    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})


    const fetchData = async () => {
        setProducts(dummyProducts)
    }
    useEffect(() => {
        fetchData();
    }, [])


    const addToCart = (itemId) => {
        let cardData = structuredClone(cartItems);
        if (cardData[itemId]) {
            cardData[itemId] += 1;
        } else {
            cardData[itemId] = 1;
        }
        setCartItems(cardData);
        toast.success("Added To Cart")
    }

    const updateCartItems = (itemId,quantity)=>{
        let cardData  = structuredClone(cartItems);
        cardData[itemId] =  quantity;
        setCartItems(cardData);
        toast.success("Cart Updated")
    }



    const removeFromCart = (itemId) => {
        let cardData = structuredClone(cartItems);
        if (cardData[itemId]) {
            cardData[itemId] -= 1;
            if (cardData[itemId] === 0) {
                delete cardData[itemId];
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cardData)
    }

    //get cart Item Count
    const getcartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // Get Cart Total Amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }






    const value = {
        user, setUser, navigate, isSeller, setIsSeller, showUserLogin, setShowUserLogin,
        getCartAmount,
        getcartCount,
        products, currency, addToCart, updateCartItems, removeFromCart, cartItems, searchQuery, setSearchQuery
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = () => {
    return useContext(AppContext)

}