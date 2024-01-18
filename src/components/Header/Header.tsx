import { formatDate } from '../../helpers/formatDate.ts'
import styles from './Header.module.css'
import { themeIcons } from '../../assets'
import { useTheme } from '../../context/ThemeContext.tsx'

export const Header = () => {
	const { isDark, toggleTheme } = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.h1}>React news</h1>
				<p className={styles.date}>{formatDate(new Date())}</p>
			</div>

			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				alt='imgTheme'
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	)
}
