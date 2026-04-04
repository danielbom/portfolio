<script lang="ts">
    let { children } = $props();
</script>

<div class="flex-1 flex flex-col gap-6">
    {@render children()}
</div>