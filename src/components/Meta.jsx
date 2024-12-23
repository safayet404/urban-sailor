/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </Helmet>
    </div>
  );
};

export default Meta;