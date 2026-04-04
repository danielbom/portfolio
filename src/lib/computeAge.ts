export default function computeAge(date: Date) {
	const birthDate = new Date(1998, 11, 7);
	const now = date;
	let age = now.getFullYear() - birthDate.getFullYear();

	if (
		now.getMonth() < birthDate.getMonth() ||
		(now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
	) {
		age--;
	}

	return `${age} anos`;
}
