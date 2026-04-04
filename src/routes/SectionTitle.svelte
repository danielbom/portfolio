<script lang="ts">
    let { children } = $props();
</script>

<h1 class="font-bold text-3xl md:text-4xl pb-5 md:pb-10">
    {@render children()}
</h1>
