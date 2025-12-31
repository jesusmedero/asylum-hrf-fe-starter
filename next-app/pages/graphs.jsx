// pages/graphs.jsx
import { App } from '../App.jsx';
import { GraphsPage } from '../components/pages/DataVisualizations/GraphsPage.jsx';
import { pageWrapper } from '../components/layout/PageWrapper.jsx';

export default function GraphsRoute() {
  return (
    <App>
      {pageWrapper(<GraphsPage />)}
    </App>
  );
}
