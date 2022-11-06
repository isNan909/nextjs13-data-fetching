import Link from 'next/link'
import { use } from "react"

// getStaticProps in Next13
async function getCharacters() {
	return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export default function BlogList() {
	const allCharacters = use(getCharacters())
	return (
		<div>
			<h2>getStaticPaths and getStaticProps</h2>
			{allCharacters?.results.map(c =>
				<ul key={c.id}>
					<Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
						<li>{c.name}</li>
					</Link>
				</ul>
			)}
		</div>
	)
}