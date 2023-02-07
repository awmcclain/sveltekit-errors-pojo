import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load() {
  try {
    throw new Error("this is a test error");
  } catch (err) {
    let e = err as App.Error;
    e.userMessage = 'this is a user message';
    throw error(500, e);
  }
}
