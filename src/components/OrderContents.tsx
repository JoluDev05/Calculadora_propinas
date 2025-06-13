import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        
        <div className="mt-5 space-y-3">
            {
                order.length === 0 ? 
                <p className="text-center text-2xl">La orden esta vacia</p> 
                : (
                    order.map(item => (
                        <div key={item.id} className="border-b border-slate-300 pb-3">
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
