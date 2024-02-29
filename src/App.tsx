import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router";
import Request from "./reqeust";
import { useMount } from "ahooks";

function App() {
  useMount(() => {
    const init = async () => {
      await Request();
    };
    init();
  });
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
    
  );
}

export default App;
