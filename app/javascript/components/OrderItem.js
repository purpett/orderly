import formatCurrency from "../formatCurrency"

export default function OrderItem(props) {
  const { countItemInOrder, removeItemFromOrder, addItemToOrder, item, quantity } = props

  console.log(quantity)
  // console.log(order)
  // console.log(item.id)

  const sameItemCount = countItemInOrder(item)


  return (
    <li key={props.index} className="flex border-b py-3 gap-4">
      <div className="flex-1">
        <h3>{item.name}</h3>
        <p className="text-sm text-gray-500 break-words">{item.description}</p>
      </div>
      <div className="ml-auto text-center">
        {formatCurrency(item.price)}
        {/* <button onClick={() => props.removeItemFromOrder(item)} className="ml-3 text-sm text-red-500">Remove</button> */}
        {/* if item is 1, show bin icon, else show minus icon */}
        <div className="flex justify-evenly mt-3">
          {sameItemCount === "1x" && <img src="/delete.svg" alt="delete icon" className="mx-2 cursor-pointer" onClick={() => removeItemFromOrder(item)} />}
          {sameItemCount > "1x" && <img src="/minus-circle.svg" alt="minus sign icon" className="mx-2 cursor-pointer" onClick={() => removeItemFromOrder(item)} />}
          <p className="text-center">
            {sameItemCount}
          </p>
          <img src="/plus-circle.svg" alt="plus sign icon" className="mx-2 cursor-pointer" onClick={() => addItemToOrder(item)} />
        </div>
      </div>
    </li>
  )
}