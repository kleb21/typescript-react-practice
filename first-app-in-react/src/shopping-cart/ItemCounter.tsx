import { useState } from "react";

interface ItemCounterProps {
    itemValue: string;
    quantity?: number;
}

export const ItemCounter = ({ itemValue, quantity }: ItemCounterProps) => {
    const [counter, setCounter] = useState(quantity ?? 0)

    const addItem = () => {
        setCounter(counter + 1)
    }

    const subtractItem = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }

    const clear = () => {
        setCounter(0)
    }

    return (
        <section className='flex align-middle gap-3 mt-8'>
            <span className='text-gray-700 px-4 py-2 w-md '>{itemValue}</span>
            <button onClick={addItem} className='bg-blue-500 text-white ml-3 px-4 py-2 rounded-l'>+1</button>
            <span className=' text-gray-700 px-4 py-2'> {counter ?? 0} </span>
            <button onClick={subtractItem} className='bg-blue-500 text-white px-4 py-2 rounded-l'>-1</button>
            <button onClick={clear} className='bg-blue-500 text-white px-4 py-2 rounded-l'>Clear</button>

        </section>
    )
}

