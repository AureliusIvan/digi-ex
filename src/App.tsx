import { lazy, Suspense } from 'react';
import Layout from './layouts/home-layout';

const View = lazy(() => import('./components/View'));

const App = () => {
  return (
    <Layout>
      <main
        className='bg-white'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <View />
        </Suspense>
      </main>
    </Layout>
  );
}

export default App;