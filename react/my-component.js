import React from 'react';

function MyComponent({ name }) {
	return (
		<div>
			<h1>Hello {name}!</h1>
		</div>
	)
}

function MyCallbackComponent({ callback }) {
	return (
		<div>
			<button onClick={callback}>Click Me</button>
		</div>
	);
}

function MyCompositeComponent({ callback }) {
	return (
		<div>
			<p>totally cool man</p>
			<MyCallbackComponent callback={callback}/>
		</div>
	)
}

export {
	MyComponent,
	MyCallbackComponent,
	MyCompositeComponent,
}
