<script lang="ts">
    let { link, src, alt } = $props();
</script>

<div class="flex justify-center">
    <div class="flex-1 max-w-[300px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                src={src}
                alt={alt}
                class="rounded-lg hover:scale-[1.5] lg:hover:-translate-x-[25%] group-odd:lg:hover:translate-x-[25%] lg:hover:translate-y-[25%] transition"
            />
        </a>
    </div>
</div>
