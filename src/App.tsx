import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const {order, addItem, removeItem, tip, setTip, placeOrder} = useOrder();
  return (
    <>
      <header className=" bg-orange-300 py-5">
        <h1 className="text-center text-4xl font-black">
          Tienda tortenio ITH
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center font-black text-4xl">Menu</h2>

          <div className="mt-10 space-y-3 ">
            {menuItems.map(item => (
              <MenuItem 
              key={item.id} 
              item={item} 
              addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-solid border-slate-300 p-10 rounded-lg space-y-10">
            {
              order.length  ?(
                <>
                    <OrderContents 
                    order={order}
                    removeItem={removeItem}
                    />
                    <TipPercentageForm 
                      setTip={setTip}
                      tip={tip}
                    />
                    <OrderTotals
                    order={order}
                    tip={tip}
                    placeOrder={placeOrder}
                    />
                </>
              ) : (
                
                <p className="text-center"> La orden esta vacia </p>
              )}
        </div>
      </main>
    </>
  );
}

export default App;
