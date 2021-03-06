import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$data: resolve('./src/data'),
					$components: resolve('./src/components')
				}
			}
		}
	}
};

export default config;
