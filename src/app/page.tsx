import Word from '@/components/Word/Word';
import styles from './page.module.css';
import Letter from '@/components/Letter/Letter';

const testWord = ['H', 'E', 'L', 'L', 'O'];
const testAnswer = 'SWIFT';

// Word is submitted
// Word is current
// Word is pending
// compare this to number of guesses

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Hello Wordle</h1>
			</header>
			<main className={styles.main}>
				<section>
					This is the testing ground for a single Letter component:
					<div>
						<Letter letter={'Q'} correctLetter={'Q'} />
						<Letter letter={'Q'} correctLetter={'X'} />
					</div>
				</section>
				<section>
					This is the testing ground to display a single Word component:
					<Word word={testWord} answer={testAnswer} />
				</section>
				<section>
					Testing ground to display a grid of Word components (5x6) for the game
					board:
					<div>
						<Word word={testWord} answer={testAnswer} />
						<Word word={['S', 'W', 'O', 'R', 'D']} answer={testAnswer} />
						<Word word={['S', 'T', '', '', '']} answer={testAnswer} />
						<Word word={['', '', '', '', '']} answer={testAnswer} />
						<Word word={['', '', '', '', '']} answer={testAnswer} />
						<Word word={['', '', '', '', '']} answer={testAnswer} />
					</div>
				</section>
			</main>
		</div>
	);
}
