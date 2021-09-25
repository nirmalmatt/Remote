<script>
  export let sectionHeader;
</script>
<section class="rounded p-3 bg-gray-50 m-4 grid grid-cols-1 divide-y">
	<header class="p-2 font-bold text-gray-700">
		<h1>{sectionHeader}</h1>
	</header>
	<main class="p-4">
		<slot name="main-section"></slot>
	</main>
  <footer class="p-2">
    <slot name="additional"></slot>
  </footer>
</section>