<script>
  import ProgressBar from "@okrad/svelte-progressbar";

  let perc = 0;
  let testData = [
    {
      perc: perc,
      color: "#2563EB"
    }
  ];

  function increase() {
    perc += 10;
    testData = [
      {
        perc: perc,
        color: "#2563EB"
      }
    ];
  }
</script>
<main class="p-2">
  <div class="p-2 shadow bg-gray-50 rounded w-min" on:click={increase}>
  <ProgressBar bind:series={testData} style="semicircle" width="200"/>
</div>
</main>