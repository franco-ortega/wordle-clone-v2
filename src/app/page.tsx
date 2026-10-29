import Word from '@/components/Word/Word';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Hello Wordle</h1>
			</header>
			<main className={styles.main}>
				This is the testing ground:
				<Word word={['H', 'E', 'L', 'L', 'O']} />
			</main>
		</div>
	);
}
