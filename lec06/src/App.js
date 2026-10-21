import ReactDOM from "react-dom/client";
import AppLayout from "./components/Layout";
import MainContent from "./components/MainContent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <AppLayout>
      <MainContent />
    </AppLayout>
  );
};

root.render(<App />);
