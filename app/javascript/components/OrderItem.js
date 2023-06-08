import formatCurrency from "../formatCurrency"

export default function OrderItem(props) {
  return (
    <li key={props.index} className="flex border-b py-3 gap-4">
      <div className="flex-1">
        <h3>{props.item.name}</h3>
        <p className="text-sm text-gray-500 break-words">{props.item.description}</p>
      </div>
      <div className="ml-auto">
        {formatCurrency(props.item.price)}
        {/* <button onClick={() => props.removeItemFromOrder(props.item)} className="ml-3 text-sm text-red-500">Remove</button> */}
        <div className="flex justify-evenly">
          <img src="/minus-circle.svg" alt="minus sign icon" className="mx-2 cursor-pointer" onClick={() => props.removeItemFromOrder(props.item)} />
          <p className="text-center">1</p>
          <img src="/plus-circle.svg" alt="plus sign icon" className="mx-2 cursor-pointer" onClick={() => props.addItemToOrder(props.item)} />
        </div>
      </div>
    </li>
  )
}