import Word from '@/components/Word/Word';
import styles from './page.module.css';

const testWord = ['H', 'E', 'L', 'L', 'O'];

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Hello Wordle</h1>
			</header>
			<main className={styles.main}>
				<section>
					This is the testing ground to display a single Word component:
					<Word word={testWord} />
				</section>
				<section>
					Testing ground to display a grid of Word components (5x6) for the game
					board:
					<div>
						{/* {Array.from({ length: 6 }).map((_, rowIndex) => (
							<Word key={rowIndex} word={Array(5).fill('')} />
						))} */}

						<Word word={testWord} />
						<Word word={['', '', '', '', '']} />
						<Word word={['', '', '', '', '']} />
						<Word word={['', '', '', '', '']} />
						<Word word={['', '', '', '', '']} />
						<Word word={['', '', '', '', '']} />
					</div>
				</section>
			</main>
		</div>
	);
}
