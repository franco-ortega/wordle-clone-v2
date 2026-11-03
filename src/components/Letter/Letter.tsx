import styles from './Letter.module.css';

type Props = {
	letter?: string;
};
export default function Letter({ letter }: Props) {
	// multiple states for letter:
	// 1. empty (no letter)
	// 2. filled (letter is present)
	// 3. correct (letter is correct and in the right position)
	// 4. present (letter is correct but in the wrong position)
	// 5. absent (letter is not in the word)

	return <span className={styles.Letter}>{letter}</span>;
}
