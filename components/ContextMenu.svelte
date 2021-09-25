<script>
	import { onMount } from "svelte";
	let contextMenuRef = { style: { display: "" } };
	function launchContext(e) {
	  // capture click position
	  let xPos = e.clientX;
	  let yPos = e.clientY;
	  e.preventDefault();
	  contextMenuRef.style.display = "inherit";
	  contextMenuRef.style.top = yPos.toString() + "px";
	  contextMenuRef.style.left = xPos.toString() + "px";
	}
	function hideContext() {
	  if (contextMenuRef) {
	    contextMenuRef.style.display = "none";
	  }
	}
	document.onclick = hideContext;
</script>

<div on:contextmenu={launchContext}>
	<slot name="target"></slot>
</div>
<div bind:this={contextMenuRef} style="position: fixed;display: none;">
	<slot name="context-menu"></slot>
</div>
<svelte:body on:blur={hideContext} on:click={hideContext}></svelte:body>