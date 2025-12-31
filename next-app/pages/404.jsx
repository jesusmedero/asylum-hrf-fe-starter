// pages/404.jsx
import { App } from '../App.jsx';
import { NotFoundPage } from '../components/pages/NotFound/index.jsx';
import { pageWrapper } from '../components/layout/PageWrapper.jsx';

export default function NotFoundRoute() {
  return (
    <App>
      {pageWrapper(<NotFoundPage />)}
    </App>
  );
}
