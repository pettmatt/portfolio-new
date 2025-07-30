import React from "react"

interface Props {
	list: any[],
	className: string
}

export default function List({ list, className }: Props) {
	return (
		<ul className={className}>
			{
				list.map((item: any, index: number) => (
					<li key={index}>{ item }</li>
				))
			}
		</ul>
	)
}
