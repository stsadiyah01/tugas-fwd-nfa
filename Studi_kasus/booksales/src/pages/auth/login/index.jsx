import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-4 pb-4 border-bottom-0 d-flex justify-content-center">
              <h1 className="fw-bold mb-0 fs-2">Login</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Login
                </button>

                <small className="d-block text-body-secondary text-center">
                  Belum punya akun? <Link to="/register">Register</Link>
                </small>

                <hr className="my-4" />

                <p className="fs-5 fw-bold mb-3 text-center">Or Login with</p>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="button"
                >
                  Login with Google
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="button"
                >
                  Login with Facebook
                </button>

                <button
                  className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                  type="button"
                >
                  Login with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}