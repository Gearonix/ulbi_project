import {FC, Suspense} from 'react';
import './styles/style.scss';
import {AppRouter} from 'app/providers/AppRouter';
import {Navbar} from 'widgets/Header';
import 'shared/config/i18n';
import {useTheme} from 'shared/lib/hooks';
import {ChangeLanguage} from 'features/ChangeLanguage';


const App: FC = () => {
  const {theme} = useTheme();

  return <div className={`App ${theme}`}>
    <Navbar/>
    <AppRouter/>
    <Suspense fallback={''}>
      <ChangeLanguage/>
    </Suspense>

  </div>;
};

export default App;
