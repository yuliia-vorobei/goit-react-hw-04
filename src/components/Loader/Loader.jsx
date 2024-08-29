import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#6495ed"
        secondaryColor="#6495ed"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass={css.spinner}
      />
    </>
  );
}
