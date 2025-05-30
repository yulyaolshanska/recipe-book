import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';

const RecipeListPage = lazy(() => import('./pages/RecipeList/RecipeListPage'));
const RecipeDetailsPage = lazy(() => import('./pages/RecipeInfo/RecipeInfoPage'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
