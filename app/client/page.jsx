"use client"

import useSWR from "swr"
import Link from "next/link"
import { Suspense } from 'react'

const fetcher = (path) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())

export default function Clientpage() {
	const characters = useSWR("api/character", fetcher)
	return (
		<div>
			<h2>Client Fetching</h2>
			<Suspense fallback={<>Loading ...</>}>
				{characters?.data?.results?.map(c =>
					<ul key={c.id}>
						<Link href={`/staticprops/${c.name}`}>
							<li>
								{c.name}
							</li>
						</Link>
					</ul>
				)}
			</Suspense>
		</div>
	)
}


