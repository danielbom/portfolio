<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import clinicAppointmentsImage from '$lib/images/projects/clinic-appointments.png';
</script>

<Project name="Clinic Appointments" image={clinicAppointmentsImage} link="https://github.com/danielbom/clinic-appointments">
    A clinic appointment system implemented using different backend technologies: Go, .NET, Node.js with TypeScript, and Bun.
    The project explores how to maintain consistent business rules, validations, and API behavior across different ecosystems.
    End-to-end tests serve as a shared contract between the implementations, helping uncover bugs, validate architectural
    decisions, and make the code more resilient.
    Rather than comparing technologies, the goal was to understand different ways of solving the same software engineering
    problems.
</Project>
