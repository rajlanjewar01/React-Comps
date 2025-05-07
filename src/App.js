import Accordion from "./components/Accordion";

function App() {
	const items = [
		{
			id: 'dfdkl7',
			label: 'What is React',
			content: 'React.js is a popular open-source JavaScript library. Used developing single page web application.'
		},
		{
			id: 'dfk3l7',
			label: 'React is a Framework?',
			content: 'React JS is not a framework it is a Library.'
		},
		{
			id: 'alsdkp',
			label: 'Who maintains the React project',
			content: 'It is developed and maintain by Facebook(Meta)'
		}
	];

	return <Accordion items={items} />;
}

export default App;
