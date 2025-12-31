
import { App } from '../App.jsx';
import { LandingPage } from '../components/pages/Landing';
import { pageWrapper } from '../components/layout/PageWrapper.jsx';

export default function HomePage() {
  return (
    <App>
      {pageWrapper(<LandingPage />)}
    </App>
  );
}
