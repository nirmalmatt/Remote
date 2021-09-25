<script>
	import { createEventDispatcher } from "svelte";
	import ContextMenu from "../ContextMenu.svelte";
	import SwitchMenu from "./SwitchMenu.svelte";
	export let label;
	export let state;
	let dispatch = createEventDispatcher();

	function removeSwitch() {
	  dispatch("remove");
	}
</script>
<ContextMenu>
	<button 
	slot="target"
	class={state ? "p-3 bg-gray-50 flex justify-center align-center rounded-lg text-gray-700 max-w-xs shadow transition-colors w-full" : "p-3 bg-gray-300 flex justify-center align-center rounded-lg text-gray-400 max-w-xs transition-colors w-full"}
	on:click={() => dispatch("toggle")}
>
	{label}
</button>
<div slot="context-menu">
	<SwitchMenu on:remove={removeSwitch}/>
</div>
</ContextMenu>