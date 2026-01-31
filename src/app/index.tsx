import '../styles/fonts.css'; 
import style from './app.module.css';
import '../styles/variables.css';
import '../styles/light.css';
import '../styles/dark.css';
import { useTheme } from '../hooks/useTheme';

export const App = () => {
  useTheme();

  return (
    <div className={style.page}>
    </div>
  );
};