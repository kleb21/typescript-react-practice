import { ItemCounter } from "./shopping-cart/ItemCounter";

interface items {
  productName: string;
  quantity: number;
}

const itemsList: items[] = [
  { productName: 'nintendo', quantity: 3 },
  { productName: 'playstation', quantity: 5 },
  { productName: 'xbox', quantity: 2 },
  { productName: 'xbox2', quantity: 3 },
  { productName: 'xbox3', quantity: 2 },

]

export function FirstComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="font-bold text-2xl mb-2">My first nested components</h1>
      {/* <ItemCounter itemValue='nintendo' quantity={3} />
      <ItemCounter itemValue='playstation' quantity={5} />
      <ItemCounter itemValue='xbox' quantity={2} /> */}
      {itemsList.map((item) => (
        <ItemCounter key={item.productName} itemValue={item.productName} quantity={item.quantity} />
      ))}

    </div>
  )
}