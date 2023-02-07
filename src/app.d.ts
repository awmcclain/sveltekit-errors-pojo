// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			httpStatus?: number;
			userMessage?: string;
			stack?: string;

		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
