import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { TagsContextProvider } from "./../context/tagsContect";

function MyApp({ Component, pageProps }) {
  return (
    <TagsContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </TagsContextProvider>
  );
}

export default MyApp;
