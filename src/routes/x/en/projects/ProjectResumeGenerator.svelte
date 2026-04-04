<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import resumeGeneratorImage from '$lib/images/projects/resume-generator.png';
</script>

<Project
	name="Resume Generator"
	image={resumeGeneratorImage}
	link="https://github.com/danielbom/resume-generator"
>
	This project is a Python command-line tool that creates clean, multilingual resumes in PDF format.
	It was developed to solve problems found in other tools, such as page breaks, multilingual
	support, and maintaining a consistent layout. Using resume data from a JSON file, the tool
	generates customized PDFs with options to set colors and job-specific titles. It's mainly aimed at
	people familiar with the terminal but can be expanded for broader use.
</Project>
