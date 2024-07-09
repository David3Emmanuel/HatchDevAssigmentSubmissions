import { CSSProperties, useState } from "react"

export default function SimpleCounter() {
    const [count, setCount] = useState(0);
    const buttonStyle: CSSProperties = {
        width: 100,
        backgroundColor: '#ddd',
        color: '#222',
    }

    return <div className='project'>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '5rem 1rem',
        }}>
            <button style={buttonStyle} onClick={() => setCount(count => count + 1)}>
                <h2 style={{margin: 0}}>+</h2>
            </button>
            <h2 style={{ textAlign: 'center', margin: 0 }}>{count}</h2>
            <button style={buttonStyle} onClick={() => setCount(count => count <= 0 ? 0 : count - 1)}>
                <h2 style={{margin: 0}}>-</h2>
            </button>
        </div>
    </div>
}