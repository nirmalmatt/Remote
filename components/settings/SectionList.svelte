<script>
	import SectionListItem from "./SectionListItem.svelte";
	export let setting_list;
</script>
<ul class="grid grid-cols-1 text-gray-700 gap-2">
	{#each setting_list as setting}
		<SectionListItem label={setting.label}>+</SectionListItem>
	{/each}
</ul>