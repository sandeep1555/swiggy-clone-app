import ItemList from "./ItemList"

const RestaurantCategory=({data})=>
{

    return (
        <div className="m-5 bg-white rounded-lg">
            <div className="flex justify-between mx-3 py-3 ">
            <span className="font-bold " >{data.title}({data.itemCards.length})</span>
            <span className="">↓</span>
            </div>
            <ItemList item={data.itemCards}/>
        </div>
    )
}

export default RestaurantCategory