<script>
	import { createEventDispatcher } from "svelte";
	let disp = createEventDispatcher();

	function removeEvoked() {
	  disp("remove");
	}
</script>
<div class="rounded bg-gray-50 shadow py-2">
	<ul>
		<li class="text-gray-600 hover:bg-gray-200 px-2 py-1 cursor-pointer" aria-roledescription="button" on:click={removeEvoked}>Remove</li>
	</ul>
</div>