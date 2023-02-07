<script>
  import { page } from "$app/stores";

  $: console.log({ $page });
</script>

HELLO
<div class="w-screen h-screen bg-main grid place-items-center text-white">
  <div class="w-120">
    <h1 class="mb-4 text-5xl font-bold">{$page.status}</h1>
    {#if $page?.error?.userMessage}
      <p class="mb-2 text-lg font-medium">{$page?.error.userMessage}</p>
    {/if}
    <p class="mb-2 text-sm opacity-75">{$page?.error?.message}</p>

    <hr class="my-10 opacity-25 b-white" />

    <a href="/" class="btn btn-light">Go to Sesh.com</a>
  </div>
  {#if $page?.error?.stack}
    <pre>{@html $page.error.stack}</pre>
  {/if}
</div>
