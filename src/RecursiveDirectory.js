import React, { useState } from 'react';

const RecursiveDirectory = ({ name, type, children }) => {
	const hasChildren = type === 'dir' && children.length;
	const [expanded, setExpanded] = useState(false);

	return (
		<ul>
			<li>
				<span
					onClick={() => setExpanded((prev) => !prev)}
					className={hasChildren ? 'dir' : 'file'}>
					{name}
				</span>
				<span className={!expanded ? 'hidden' : null}>
					{hasChildren &&
						children.map((item) => (
							<RecursiveDirectory key={item.name} {...item} />
						))}
				</span>
			</li>
		</ul>
	);
};

export default RecursiveDirectory;
