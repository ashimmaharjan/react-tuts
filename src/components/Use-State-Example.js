import { useState } from "react";

const UseState = () => {
    const [name, setName] = useState('MARIO');
    const [age, setAge] = useState(25)

    const changeName = () => {
        setName('LUIGI');
        setAge(30);
    }

    return (
        <div className="home pl-5 border rounded-lg py-3">
            <h1 className="text-lg text-gray-600">1. Use State Example</h1>
            <p className='mt-2 text-sm'>{name} is {age} years old.</p>
            <button onClick={changeName}
                className="bg-yellow-500 h-8 px-2 mt-3 text-sm text-white shadow-md rounded-md"> Change Name </button>
        </div>
    );
}

export default UseState;
