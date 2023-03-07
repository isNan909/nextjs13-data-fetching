import Link from 'next/link'
import styles from '../../styles/navbar.module.css'

const routes = [
	{ name: "Server", path: "/server" },
	{ name: "Client", path: "/client" },
	{ name: "Staticprop", path: "/staticprops" }
]

export default function Navbar() {
	return (
		<>{routes.map(r =>
			<Link className={ styles.navlinks } key={r.path} href={r.path}>{r.name}</Link>
			)}
		</>
	)
}
