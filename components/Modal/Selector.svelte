<script>
  export let selectorName;
  export let options = [];
  export let value;

  const onSelection = e => (value = e.target.value);
</script>
<div class="flex justify-between items-center">
{selectorName}
<select class="px-3 py-2 bg-gray-200 rounded-md focus:ring focus:outline-none" on:input={onSelection}>
  {#each options as option}
    <option value={option.value || option.label}>{option.label}</option>
  {/each}
</select>
</div>