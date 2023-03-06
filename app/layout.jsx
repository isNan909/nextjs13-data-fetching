import "../styles/globals.css";
import Navbar from './shared/navbar';

export const metadata = {
	title: 'Data Fetching',
	icons: {
		icon: '/favicon.ico'
	}
}
  
export default function Layout({ children }) {
	return (
		<html>
			<body className="wrapper">
				<Navbar />
				{children}
			</body>
		</html>
	)
}
