import type { PageLoad } from './$types';

export function load() {
	return {
		someData: 'this is some data passed from +page.ts'
	};
}