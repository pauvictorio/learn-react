import React, { useState } from 'react'

export default function Click() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
			<p>Total number of clicks: {count}</p>
		</div>
	)
}
