// async function getCharacters() {
// 	// getStaticProps in Next13
// 	return await (await fetch("https://rickandmortyapi.com/api/character")).json();
// }

// getStaticPaths in Next13
// export async function generateStaticParams() {
// 	const characters = await getCharacters();

// 	return characters?.data?.results.map(c => ({
// 		slug: c?.name.replace(/\s+/g, "-").toLowerCase()
// 	}))
// }

export default function Staticpage({ params }) {
	return (
		<>
			<h1>The character name is: {params.slug}</h1>
		</>
	)
}