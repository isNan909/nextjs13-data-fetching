"use client"

import useSWR from "swr"
import Link from "next/link"

const fetcher = (path) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())

export default function Clientpage() {
	const characters = useSWR("api/character", fetcher)
	return (
		<div>
			<h2>Static paths and Props</h2>
			<ul>
				{characters?.data?.results?.map(c =>
					<li key={c.id}>
						<Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
							{c.name}
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

