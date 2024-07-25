import { Card } from '~/components/02-molecules/card/card';

import styles from './cards.module.css';

import type { TCard } from '~/components/02-molecules/card/card';

export type TCards = {
	id: string;
	cards: TCard[];
};

export const Cards: React.FC<TCards> = ({ id, cards }) => (
	<ul id={id} className={styles.list} data-e2e-id="cards">
		{cards.map((card) => (
			<li key={card.id} className={styles.item}>
				<Card {...card} />
			</li>
		))}
	</ul>
);
