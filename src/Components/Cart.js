import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearitems, removeitems } from "../Utils/cartSLice";

const Cart=()=>


{
    const dispatch=useDispatch();
    const handleClearCart=()=>
    {
        dispatch(clearitems());
    }

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(<div className="text-center ">
        <h1 className="m-5 font-bold text-xl">Cart-({cartItems.length})</h1>
        <button className="border border-black p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>clear cart</button>

        {cartItems.length===0  && <h1 className="m-5 text-2xl font-bold">please add your food to the cart</h1>}
        <div className="m-auto w-6/12 ">
            
        <ItemList items={cartItems}/>
        </div>
    </div>)
}

export default Cart