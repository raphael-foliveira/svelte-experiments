import type { RequestHandler } from '@sveltejs/kit';
import type { File } from 'buffer';
import { writeFile } from 'fs/promises';

export const POST: RequestHandler = async ({ request }) => {
	console.log('received post');
	const requestData = await request.formData();
	const file = requestData.get('fileData') as unknown as File;

	await writeFile('./image.png', file.stream());

	return new Response(
		JSON.stringify({
			message: 'ok'
		}),
		{
			status: 201
		}
	);
};
