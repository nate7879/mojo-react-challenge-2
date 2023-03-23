import React from 'react';

const BRAND_NAME = 'MojoCrowe';

export const useTitle = (title?: string) => {
	const newTitle = title ? `${title} - ${BRAND_NAME}` : BRAND_NAME;

	React.useEffect(() => {
		document.title = newTitle;
	}, [newTitle]);
};
