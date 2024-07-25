import clsx from 'clsx';

import styles from './cta.module.css';

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & CtaShared;

export type TLinkButton = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	CtaShared;

type CtaShared = React.PropsWithChildren<{
	className?: string;
}>;

export const Button: React.FC<TButton> = ({
	children,
	type = 'button',
	className,
	onClick,
	...buttonAttributes
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<button
			type={type}
			onClick={handleClick}
			className={clsx(styles.button, className)}
			{...buttonAttributes}
		>
			{children}
		</button>
	);
};

export const LinkButton: React.FC<TLinkButton> = ({
	href,
	children,
	className,
	onClick,
	...linkAttributes
}) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={clsx(styles.cta, className)}
			{...linkAttributes}
		>
			{children}
		</a>
	);
};

type TCtaText = {
	children: React.ReactNode;
	className?: string;
};

const CtaText: React.FC<TCtaText> = ({ children, className }) => (
	<span role="presentation" className={clsx(styles.content, className)}>
		{children}
	</span>
);

export const CtaContent = {
	Text: CtaText,
};
