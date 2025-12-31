
import { App } from '../App.jsx';
import Profile from '../components/pages/Profile/index.jsx';
import { pageWrapper } from '../components/layout/PageWrapper.jsx';

export default function ProfileRoute() {
  return (
    <App>
      {pageWrapper(<Profile />)}
    </App>
  );
}
