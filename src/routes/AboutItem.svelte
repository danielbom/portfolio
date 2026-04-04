<script lang="ts">
    let { children } = $props();
</script>

<div class="flex lg:flex-row odd:lg:flex-row-reverse group flex-col pb-10 gap-10">
    {@render children()}
</div>