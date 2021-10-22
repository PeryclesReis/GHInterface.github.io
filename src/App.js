import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import { ResetCss } from "./styles/ResetCss";
import useGitHubHooks from './components/hooks/githubHooks';

const App = () => {
  const { githubState } = useGitHubHooks();

  return (
    <main>
      <ResetCss />
      <Layout>
        {
          githubState.loading
          ? 'Loading...'
          : <>
            <Profile />
            <Repositories />
          </>
        }
      </Layout>
    </main>
  );
}

export default App;
