import { useState } from "react";

export default function ToggleText() {
    const [showText, setShowText] = useState(false);

    return <div className='project'>
        <div style={{ display: 'flex', margin: '5rem 1rem', gap: '1rem', height: 50 }}>
            <button
                style={{ width: 125 }}
                onClick={() => setShowText(showText => !showText)}
            >
                {showText ? 'Hide' : 'Show'} Text
            </button>
            {showText && <p style={{ flex: 1 }}>This is the hidden text.</p>}
        </div>
    </div>
}