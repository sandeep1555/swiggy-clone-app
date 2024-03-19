const ItemList=({item})=>
{
    return(<div>
         {item.map((item)=>(
         <div key={item.card.info.id}>

            <span>{item.card.info.name}</span>
            </div>)
         )
}
    </div>)
}

export default ItemList