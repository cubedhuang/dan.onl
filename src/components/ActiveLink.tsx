import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface ActiveLinkProps extends LinkProps {
	children: React.ReactElement;
	activeClass: string;
	nonActiveClass?: string;
}

export default function ActiveLink({
	children,
	href,
	activeClass,
	nonActiveClass = "",
	...props
}: ActiveLinkProps) {
	const router = useRouter();

	return (
		<Link href={href} {...props}>
			{React.cloneElement(children, {
				className:
					router.pathname === href
						? children.props.className
							? `${children.props.className} ${activeClass}`
							: activeClass
						: children.props.className
						? `${children.props.className} ${nonActiveClass}`
						: nonActiveClass
			})}
		</Link>
	);
}
