import "../styles/global.css";
import '../styles/dashboard.css'; // Move global CSS import here new

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

