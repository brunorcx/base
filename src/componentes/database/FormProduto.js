import "../../styles/formProduto.css";
const FormProduto = () => {
  return (
    <div className="formProduto">
      <div className="img-container"></div>
      <div className="card">
        <h2>Join us!</h2>
        <div className="card-grid">
          <div className="col-50 card-cell card-login">
            <h3>I already have an account</h3>
            <div className="card-form">
              <label>E-mail</label>
              <input type="text" />
              <label>Password</label>
              <input type="password" />
            </div>
            <button className="card-form-button button-ghost">Login</button>
          </div>
          <div className="col-50 card-cell card-signup">
            <h3>I don't have an account yet</h3>
            <div className="card-form">
              <label>Name</label>
              <input type="text" />
              <label>E-mail</label>
              <input type="text" />
              <label>Password</label>
              <input type="password" />
              <label>Confirm password</label>
              <input type="password" />
            </div>
            <button className="card-form-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduto;
