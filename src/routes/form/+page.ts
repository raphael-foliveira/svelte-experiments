import type { PageLoad } from './$types';

export const load: PageLoad = ({ params,  }) => {
	return {
		someData: 'this is some data passed from +page.ts'
	};
};
