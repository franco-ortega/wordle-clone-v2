import Letter from '../Letter/Letter';
import styles from './Word.module.css';

type Props = {
	word: string[];
	answer: string;
};

export default function Word({ word, answer }: Props) {
	// multiple states for word:
	// 1. current word (letters are being typed)
	// ... 1a. filled (letters are present - not submitted yet)
	// ... 1b. filled and submitted (letters are present - submitted)
	// 2 other words (letters are not being typed)
	// ... 2a. word hasn't been reached yet (letters are empty)
	// ... 2b. previous word (has been submitted - letters are filled and submitted)

	// needs to check if current word is active word (letters are being typed) or if it is a previous word (letters have been submitted) or if it is a future word (letters are empty) - a counter could keep track of the current word index and compare it to the index of the word being rendered

	return (
		<div className={styles.Word}>
			{word.map((letter, index) => (
				<Letter key={index} letter={letter} correctLetter={answer[index]} />
			))}
		</div>
	);
}
