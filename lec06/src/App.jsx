import ReactDOM from "react-dom/client";
import Content from "./components/Content";
import AppLayout from "./layout/AppLayout";

// css
import "./css/global.css";

function App() {
  return (
    <AppLayout>
      <Content />
    </AppLayout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
