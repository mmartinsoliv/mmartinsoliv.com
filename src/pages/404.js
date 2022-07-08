import ErrorMessage from "../components/ErrorMessage";
import Base from "../layout/Base";

const customError = () => (
    <Base>
      <ErrorMessage message="This page doesn't exist..." code={404} />
    </Base>
)

export default customError