<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import safeEatImage from '$lib/images/projects/safe-eat.png';
</script>

<Project name="Safe Eat" image={safeEatImage} link="https://github.com/danielbom/safe-eat">
	Project developed in a group at college divided into three parts: a mobile frontend developed in
	Kotlin for customers, a backend using Java Spring, and a web frontend aimed at restaurants. The
	idea is to create a delivery app that allows users to inform their allergies or dietary
	restrictions, enabling them to check if a product is safe for consumption. The goal is to provide
	a personalized and safe experience for people with specific dietary needs, promoting inclusion and
	accessibility.
</Project>
