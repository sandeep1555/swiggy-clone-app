import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { useSearchParams } from "react-router-dom";
import { additems } from "../Utils/cartSLice";

const ItemList=({items})=>
{
    const dispatch=useDispatch()
    
    const handleAdditems=(item)=>
    {

       dispatch(additems(item));
    }
    return(<div>
         {items.map((item)=>(
         <div key={item.card.info.id} className="flex  justify-between text-left  border-b-2 m-2 border-gray-300  shadow-lg py-3 items-center">
           <div className="w-9/12 mx-2">
            <span className="text-xl py-4">{item.card.info.name}</span>
            <h4 className="font-bold pb-2">₹{item.card.info.price/100}</h4>
            <p>{item.card.info.description}</p>
            </div>
            <div>
                <button className="absolute bg-black text-white rounded-lg p-1 px-4 m-5 mx-8" onClick={()=>handleAdditems(item)}>Add+</button>
                </div>
            <div className="w-3/12">
                <img className="w-32 bg-gray-100 rounded-lg "src={CDN_URL+item.card.info.imageId}/>
            </div> 
            </div>
            
         ))

          
}
    </div>)
}

export default ItemList