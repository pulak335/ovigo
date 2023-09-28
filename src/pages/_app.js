import AuthProvider from "@/Context/AuthProvider";
import "@/styles/globals.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  return (
    <AuthProvider>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}
