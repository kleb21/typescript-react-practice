const nah = 'naaaaah'
const message = 'this is a message'

const array = [1, 2, 3, 4, 5]

const exampleObjet = {
    name: 'John',
    age: 30,
    city: 'New York'
}

export function AwesomeComponent() {
    return (
        <>
            <h1>{nah}</h1>
            <h2>This is a subheading and my first variable: {message}</h2>

            <p className="bg-red-500">Array: {array.join(', ')}</p>
            <p>Object: {exampleObjet.name}, {exampleObjet.age}, {exampleObjet.city}</p>
        </>
    )
} 