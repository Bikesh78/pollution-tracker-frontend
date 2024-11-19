import { loaderContainer, spinner } from "../styles/styles.css";

export const Loader: React.FC = () => {
  return (
    <div className={loaderContainer}>
      <div className={spinner}></div>
    </div>
  );
};
