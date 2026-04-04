<script lang="ts">
    let { id, children } = $props();
</script>

<section id={id} class="flex-1 py-5 md:py-10">
    {@render children()}
</section>