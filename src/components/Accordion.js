import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		setExpandedIndex(nextIndex);

		expandedIndex === nextIndex ? setExpandedIndex(-1) : setExpandedIndex(nextIndex);
	}

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = <span className='text-2xl'>
			{ isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward /> }
		</span>

		// If isExpanded is true then we will get back last Truthy value that is content [&& operator give back first Falsy value or the last Truthy value]
		return (
			<div key={item.id}>
				<div onClick={ () => handleClick(index) } className='flex justify-between items-center bg-gray-50 border-b cursor-pointer p-2'>
					{ item.label }
					{ icon }
				</div>

				<div>
					{ isExpanded && <div className='border-b p-5'>{item.content}</div> }
				</div>
			</div>
		);
	});
	return <div className='border-x border-t rounded'> { renderedItems } </div>
}

export default Accordion;
