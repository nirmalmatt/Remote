<script>
  export let value;

  const onInput = e => (value = e.target.value);
</script>
<input class="p-2 rounded-md bg-gray-200 focus:bg-gray-200 focus:outline-none focus:border-blue-600 focus:ring my-2 ring-70"
 placeholder="label" value={value} on:input={onInput}>
