import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const initialCartItems = () => JSON.parse(localStorage.getItem("cartItems"))
    const initialPhotos = () => JSON.parse(localStorage.getItem("allPhotos"))

    const [allPhotos, setAllPhotos] = useState(localStorage.getItem("allPhotos") === null ? [] : initialPhotos)
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") === null ? [] : initialCartItems)
    const [checkoutFormItems,setCheckoutFormItems] = useState({})
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(localStorage.getItem("allPhotos").length  <= 2 || localStorage.getItem("allPhotos") === null ? data : initialPhotos))
    }, [])
    
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    localStorage.setItem("allPhotos",JSON.stringify(allPhotos))
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])        
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }

    function addCheckoutValues(fields){
        //setCheckoutFormItems(fields)
        setCheckoutFormItems(prevInputValues => ({ ...prevInputValues, fields }))
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart,
            checkoutFormItems,
            addCheckoutValues         
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}