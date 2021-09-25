<script>
  import { location } from "svelte-spa-router";
  export let navRoutes = [];
</script>
<div class="hidden lg:flex md:flex justify-around">
  {#each navRoutes as route, ind}
    <a href={route.path} class="flex items-center justify-center">
      <h5 class={route.path === '#'+$location ? "text-gray-700 bg-gray-200 px-3 py-1 rounded transition-colors" :"text-gray-400 px-3 py-1 rounded transition-colors"}>{route.label}</h5>
    </a>
  {/each}
</div>

<div class="grid fixed bottom-0 md:hidden lg:hidden w-screen left-0 grid-cols-4 p-3 bg-gray-50 shadow">
  {#each navRoutes as route}
    <a href={route.path} class={route.path === '#' + $location ? "flex items-center justify-center text-gray-800 transition-colors" : "flex items-center justify-center text-gray-500 transition-colors"}>
      <svelte:component this={route.component} size="1.5x"/>
    </a>
  {/each}
</div>