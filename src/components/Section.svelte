<script lang="ts">
    let { children } = $props();
</script>

<section class="flex-1 py-5 md:py-10">
    {@render children()}
</section>