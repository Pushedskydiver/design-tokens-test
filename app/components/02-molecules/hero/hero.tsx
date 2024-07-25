import { CtaContent, LinkButton } from '~/components/01-atoms/cta/cta';
import styles from './hero.module.css';

export type THero = {
	id: string;
	title: string;
	bodyText?: string;
};

export const Hero: React.FC<THero> = ({ id, title, bodyText }) => {
	const titleId = `${id}-hero`;

	return (
		<section
			className={styles.hero}
			aria-labelledby={titleId}
			data-e2e-id="hero"
		>
			<picture className={styles.picture}>
				<source
					srcSet="
						https://picsum.photos/200/200.webp 200w,
						https://picsum.photos/845/845.webp 845w,
						https://picsum.photos/1237/1237.webp 1237w,
						https://picsum.photos/1564/1564.webp 1564w,
						https://picsum.photos/2000/2000.webp 2000w
					"
					src="https://picsum.photos/300/300.webp"
					type="image/webp"
				/>

				<img
					sizes="(max-width: 2000px) 100vw, 2000px"
					srcSet="
						https://picsum.photos/200/200.jpg 200w,
						https://picsum.photos/845/845.jpg 845w,
						https://picsum.photos/1237/1237.jpg 1237w,
						https://picsum.photos/1564/1564.jpg 1564w,
						https://picsum.photos/2000/2000.jpg 2000w
					"
					src="https://picsum.photos/300/300.jpg"
					loading="lazy"
					decoding="async"
					alt=""
					width="300"
					height="300"
					className={styles.image}
				/>
			</picture>

			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>

				{bodyText ? (
					<p className={styles.bodyText}>{bodyText}</p>
				) : null}

				<ul className={styles.list}>
					<li className={styles.item}>
						<LinkButton href="#" varaint="secondary">
							<CtaContent.Text>Blinds</CtaContent.Text>
						</LinkButton>
					</li>

					<li className={styles.item}>
						<LinkButton href="#" varaint="secondary">
							<CtaContent.Text>Curtains</CtaContent.Text>
						</LinkButton>
					</li>

					<li className={styles.item}>
						<LinkButton href="#" varaint="secondary">
							<CtaContent.Text>Shutters</CtaContent.Text>
						</LinkButton>
					</li>
				</ul>
			</div>
		</section>
	);
};
