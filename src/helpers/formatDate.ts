export const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return new Date(date).toLocaleDateString('en-ES', options)
}
