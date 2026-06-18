import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

export default function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (


    <>
      <header className="bg-teal-400 p-4 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>


      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className ="p-5">
        <h2 className="font-black text-4xl">Menú</h2>
        
        <div className="mt-10 space-y-3">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id}
            item={item}
            addItem={addItem}

          />
        ))}
      </div>
    </div>

      <div className=" border border-dashed border-gray-400 rounded-lg p-5 rounded-ls space-y-10">

        {order.length ? (
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
              <p className="text-center">La orden está vacia</p>
          )}



      </div>
      </main>
      


      


    </>
  )
}


