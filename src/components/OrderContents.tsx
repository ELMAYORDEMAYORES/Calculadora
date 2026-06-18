import { formatCurrency } from "../helpers"
import type { OrderItem, MenuItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="mt-10 space-y-3 ">
            {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center bg-gray-200 p-3 rounded-lg"
                        >
                        <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency (item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - { formatCurrency (item.price * item.quantity) }
                        </p>
                    </div>
                    
                        <button className="bg-red-500 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
        </div>
    </div>
  )
}
