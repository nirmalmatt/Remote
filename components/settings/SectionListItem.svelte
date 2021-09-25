<script>
  export let label;
</script>
<div class="hover:bg-gray-200 px-2 rounded flex justify-between">
  <span>{label}</span>
  <nav class="md:hover:flex flex md:hidden">
    <slot></slot>
  </nav>
</div>