import Portfolio from "./pages/Portfolio";
import { EnglishProvider } from "./context/englishTranslation";

function App() {
  return (
    <EnglishProvider>
      <Portfolio />
    </EnglishProvider>
  );
}

export default App;
