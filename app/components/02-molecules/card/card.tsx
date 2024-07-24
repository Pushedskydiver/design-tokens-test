import { Link } from '@remix-run/react';

import styles from './card.module.css';

import type { TLink } from '~/global-types';

export type TCard = {
	id: string;
	title: string;
	bodyText: string;
	cta?: TLink;
};

export const Card: React.FC<TCard> = ({ id, title, bodyText, cta }) => (
	<article id={id} className={styles.card}>
		<picture className={styles.picture}>
			<source
				srcSet="
					https://picsum.photos/200/133.webp 200w,
					https://picsum.photos/1342/895.webp 1342w,
					https://picsum.photos/2115/1410.webp 2115w,
					https://picsum.photos/2625/1750.webp 2625w,
					https://picsum.photos/2880/1920.webp 2880w
				"
				src="https://picsum.photos/300/200.webp"
				type="image/webp"
			/>

			<img
				sizes="(max-width: 2880px) 100vw, 2880px"
				srcSet="
					https://picsum.photos/200/133.jpg 200w,
					https://picsum.photos/1342/895.jpg 1342w,
					https://picsum.photos/2115/1410.jpg 2115w,
					https://picsum.photos/2625/1750.jpg 2625w,
					https://picsum.photos/2880/1920.jpg 2880w
				"
				src="https://picsum.photos/300/200.jpg"
				loading="lazy"
				decoding="async"
				className={styles.image}
				alt=""
			/>
		</picture>

		<div className={styles.content}>
			<h3 className={styles.title}>{title}</h3>

			<p className={styles.bodyText}>{bodyText}</p>

			{cta ? (
				<Link to={cta.href} className={styles.cta}>
					{cta.label}
				</Link>
			) : null}
		</div>
	</article>
);
