"use client"

import useSWR from "swr";
import Link from "next/link"

const fetcher = (path) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())

export default function BlogList() {
	const characters = useSWR("api/character", fetcher)

	return (
		<div>
			<h2>getStaticPaths and getStaticProps</h2>
			{characters.data?.results.map(c =>
				<ul key={c.id}>
					<Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
						<li>{c.name}</li>
					</Link>
				</ul>
			)}
		</div>
	)
}