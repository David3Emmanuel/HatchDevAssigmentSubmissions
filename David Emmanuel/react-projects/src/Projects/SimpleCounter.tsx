import { useState } from "react"

export default function SimpleCounter() {
    const [count, setCount] = useState(0);

    return <div className='project'>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '5rem 1rem',
        }}>
            <button style={{width: 100}} onClick={() => setCount(count => count + 1)}>
                <h2 style={{margin: 0}}>+</h2>
            </button>
            <h2 style={{ textAlign: 'center', margin: 0 }}>{count}</h2>
            <button style={{width: 100}} onClick={() => setCount(count => count <= 0 ? 0 : count - 1)}>
                <h2 style={{margin: 0}}>-</h2>
            </button>
        </div>
    </div>
}