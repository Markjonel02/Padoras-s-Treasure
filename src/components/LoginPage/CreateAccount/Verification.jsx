import PropTypes from "prop-types"; // Import PropTypes
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const VerificationForm = ({ onSubmit, onResend }) => {
  const handleResend = () => {
    // Handle resend logic here
    if (onResend) {
      onResend();
    }
  };

  return (
    <div className="w-full max-w-xl max-md:w-md p-6 bg-white rounded-lg shadow-lg">
      <Formik
        initialValues={{
          verificationCode: "",
        }}
        validationSchema={Yup.object({
          verificationCode: Yup.string().required("Required"),
        })}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="verificationCode"
                className="block text-sm font-Roboto-Medium text-quaternary"
              >
                Email Verification Code <span className="text-red-500"> *</span>
              </label>
              <Field
                name="verificationCode"
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="verificationCode"
                render={(msg) => <div className="text-red-500">{msg}</div>}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-darks text-white py-3 px-4 rounded-md hover:bg-primary focus:outline-none focus:bg-primary mr-2"
              >
                {isSubmitting ? "Submitting..." : "Verify"}
              </button>
              <button
                type="button"
                onClick={handleResend}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ml-2"
              >
                Resend
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Prop validation
VerificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit must be a function and is required
  onResend: PropTypes.func, // onResend is a function and is optional
};

export default VerificationForm;
