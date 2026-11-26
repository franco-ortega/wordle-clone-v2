import type { LetterState } from '../../utils/types';
import styles from './Letter.module.css';

type Props = {
	letter?: string;
	letterState?: LetterState;
	correctLetter?: string;
};
export default function Letter({ letter, letterState, correctLetter }: Props) {
	// multiple states for letter:
	// 1. EMPTY (no letter)
	// 2. FILLED (letter is present)
	// -- border appears darker when FILLED
	// 3. CORRECT (letter is correct and in the right position)
	// -- green
	// 4. PRESENT (letter is correct but in the wrong position)
	// -- light green yellow
	// 5. ABSENT (letter is not in the word)
	// -- mid green gray

	console.log({ correctLetter, letter, letterState });

	return (
		<p
			className={`${styles.Letter} ${letter ? styles.filled : ''} ${letter === correctLetter ? styles.correct : ''} ${letter && letter !== correctLetter ? styles.incorrect : ''}`}
		>
			{letter}
		</p>
	);
}
