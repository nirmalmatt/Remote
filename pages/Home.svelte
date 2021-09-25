<script>
  import Board from "../components/switchBoard/Board.svelte";
  import { loadRooms } from "../utils/firebase.js";
  import { rooms } from "../utils/firebase.js";
  import { onMount } from "svelte";
</script>

<div class="p-4 flex flex-col">
  {#await loadRooms()}
  <p>loading</p>
  {:then}
    {#each $rooms as board}
      <Board title={board.title} board={board}/>
    {/each}
  {/await}
</div>