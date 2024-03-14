import { inputs } from "../constants";
import InputFieldView from "./InputFieldView";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5" style={{ maxWidth: "700px" }}>
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" alt="" />
          <span>Coinmania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-5 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldView key={data.name} formik={formik} data={data} />
          ))}

          <button className="btn btn-warning" type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
