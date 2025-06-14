import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"



type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem  }: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        
        <div className="mt-10 space-y-3">
            {
                order.length === 0 ? 
                <p className="text-center text-2xl">La orden esta vacia</p> 
                : (
                    order.map(item => (
                        <div 
                        key={item.id} 
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>
                            <p>
                                {item.name} - {formatCurrency (item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>

                            <button 
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-700"
                                onClick={() => removeItem(item.id)}
                                >
                                    x
                            </button>

                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
