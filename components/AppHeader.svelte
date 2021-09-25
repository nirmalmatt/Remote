<script>
  export let appIcon;
  export let appTitle;
</script>
<header class="bg-gray-50 w-screen p-3 shadow">
  <div class="flex justify-between">
    <figure class="flex items-center">
      <img src={appIcon} alt="" />
      {#if appTitle}<h1 class="text-lg font-semibold text-gray-700 antialiased mx-4">{appTitle}</h1>{/if}
    </figure>
    <nav class="flex-auto grid items-center max-w-screen-sm m-auto">
      <slot name="nav"></slot>
    </nav>
    <aside class="flex align-center justify-center">
      <slot name="rt"></slot>
    </aside>
  </div>
</header>