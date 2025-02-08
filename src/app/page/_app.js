// pages/_app.js
import { CartProvider } from "@/components/Cart-Context"; // Import the CartProvider from your Cart-Context file

function MyApp({ Component, pageProps }) {
  return (
    // Wrap your app inside CartProvider so cart context is available throughout the app
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
