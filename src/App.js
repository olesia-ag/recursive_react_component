import './App.css';
import RecursiveDirectory from './RecursiveDirectory';

let obj = {
	name: 'foo',
	type: 'dir',
	children: [
		{
			name: 'bar',
			type: 'dir',
			children: [
				{
					name: 'corge',
					type: 'file',
				},
			],
		},
		{
			name: 'baz',
			type: 'dir',
			children: [
				{
					name: 'bar',
					type: 'file',
				},
			],
		},
		{
			name: 'quux',
			type: 'file',
		},
		{
			name: 'grault',
			type: 'file',
		},
	],
};

function App() {
	return (
		<div className='App'>
			<RecursiveDirectory
				name={obj['name']}
				type={obj['type']}
				children={obj['children']}
			/>
		</div>
	);
}

export default App;
