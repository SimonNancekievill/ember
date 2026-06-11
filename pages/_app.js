import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "../styles";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#fff",
            color: "#757575",
          },

          // Default options for specific types
          success: {
            duration: 5000,
          },
          error: {
            duration: 3000,
            background: "hsl(359, 100%, 61%, 20%)",
            color: "#fff",
          },
        }}
      />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
