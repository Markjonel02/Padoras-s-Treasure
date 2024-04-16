import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaGooglePlus } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { Ripple } from "primereact/ripple";
const Login = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-black opacity-50"></div>
      <div className="relative z-10 min-h-full   flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-lg ">
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900">
          <span className="sr-only">Close</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col items-center">
            <FaCircleUser className="w-20 h-20 text-darks flex justify-center" />
          </div>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string().required("Username is re quired"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="relative z-10  space-y-6">
                <Field
                  type="text"
                  name="username"
                  className=" appearance-none rounded-none relative block w-full px-2 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  type="password"
                  name="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <div className="flex justify-between items-center">
                  <div>
                    <a
                      href="#"
                      className="text-sm text-quaternary hover:text-indigo-900"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div>
                    <a
                      href="/create-account"
                      className="text-sm text-quaternary hover:text-indigo-900"
                    >
                      Create an account
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="p-ripple group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darks hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Sign in
                  <Ripple />
                </button>

                <div className="text-center mt-4">
                  <p className="text-quaternary mb-3">
                    Or sign in with social media
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-quaternary hover:text-primary">
                      <span className="sr-only">Sign in with Twitter</span>
                      <AiFillTwitterCircle className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-quaternary hover:text-primary">
                      <span className="sr-only">Sign in with Google</span>
                      <FaGooglePlus className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-quaternary hover:text-primary">
                      <span className="sr-only">Sign in with Facebook</span>
                      <BiLogoFacebookCircle className="h-8 w-8" />
                    </a>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
