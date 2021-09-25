<script>
  import { LoaderIcon } from "svelte-feather-icons";
  export let onSwitchCreated = () => {};
  export let isLoading = false;
  const normalClasses =
    "px-3 py-1 rounded bg-blue-500 hover:bg-blue-700 text-gray-50 flex";
  const loadingClasses = "px-3 py-1 rounded bg-blue-300 text-gray-50 flex";
</script>
<button class={isLoading ? loadingClasses : normalClasses} on:click={onSwitchCreated}>
  {#if isLoading}
    <LoaderIcon size="1.5x" class="mr-2"></LoaderIcon>
  {/if}
  Done
</button>