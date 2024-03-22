import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data,Showitems,setshowList})=>

{
   const  ClickList=()=>
    {
      setshowList();
    }

    return (
        <div className="m-6 bg-white rounded-lg shadow-md  ">
            <div className="flex justify-between mx-3 py-3  cursor-pointer  " onClick={ClickList}  >
            <span className="font-bold  " >{data.title}({data.itemCards.length})</span>
            <span className="">↓</span>
            </div>


            {Showitems&& <ItemList  item={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory