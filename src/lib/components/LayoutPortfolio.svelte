<script lang="ts">
	const classes = 'px-4 sm:px-10 md:px-30 lg:px-40 xl:px-50';
</script>

<div class="scroll-smooth bg-blue-600">
	<div class="bg-indigo-900 text-white {classes}">
		<slot name="top"></slot>
	</div>
	<div class="bg-white text-black {classes}">
		<slot name="middle"></slot>
	</div>
	<div class="bg-indigo-900 text-white {classes}">
		<slot name="bottom"></slot>
	</div>
</div>
