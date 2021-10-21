import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCss } from "./styles/ResetCss";

const App = () => {
  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
