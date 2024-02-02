import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MultiSelect } from 'react-multi-select-component';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Form2() {
  const formikRef = useRef();
  const [selected, setSelected] = useState([]);
  const [values, setValues] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const validationSchema = Yup.object().shape({});
  const { state } = useLocation();
  const options = [
    { label: 'Microsoft Excel', value: 'Excel' },
    { label: 'Microsoft Word', value: 'Word' },
    { label: 'Figma', value: 'Figma' },
    { label: 'VS Code', value: 'Vscode' },
  ];

  const final = () => {
    toast.success(
      `${state.name}, your submission was successful!!!. Below are the information filled.`,
      {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      }
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  var industry = [];
  selected.forEach(function (obj) {
    industry.push(obj.label);
  });

  return (
    <Layout>
      {/* FORM PAGE 2 */}
      <div className="max-w-6xl mx-auto px-8 mb-10 mt-24 h-screen">
        {values !== undefined ? (
          <>
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div>
                <h1 className="mb-4 text-2xl font-bold">Details</h1>
                <>
                  <div className="my-4">
                    <h6 className="text-lg">Startup's Name</h6>
                    <p className="font-thin">{state.name}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-lg">Startup's Website</h6>
                    <p className="font-thin">{state.website}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-lg">Startup's Location</h6>
                    <p className="font-thin">{state.country}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-lg">Startup's Industry</h6>
                    <p className="font-thin">{values.description}</p>
                  </div>
                  <div className="my-4">
                    <h6 className="text-lg">Startup's Technologies used</h6>
                    <ul>
                      {industry.map((state) => (
                        <li key={state} className="font-thin">
                          {state}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-4">
                    <h6 className="text-lg">Date Startup was founded</h6>
                    <p className="font-thin">{values.date}</p>
                  </div>
                  <button
                    type="button"
                    className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  >
                    <Link to="/form-1">HOME PAGE</Link>
                  </button>
                </>
              </div>
            )}
          </>
        ) : (
          <form className="shadow-md bg-gray-50 rounded-md p-7">
            <h1 className="mb-4 text-2xl font-bold">Onboarding Continuation</h1>
            <Formik
              initialValues={{}}
              onSubmit={(values, { setSubmitting }) => {
                setValues(values);
                setSubmitting(false);
              }}
              validationSchema={validationSchema}
              innerRef={formikRef}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
                handleBlur,
              }) => (
                <>
                  <div className="mb-4">
                    <label>Which of these best describes your industry?</label>
                    <select
                      name="description"
                      type="text"
                      value={values.description}
                      onChange={handleChange('description')}
                      onBlur={handleBlur('description')}
                    >
                      <option value="">Select</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Finance">Finance</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Fintech">Fintech</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label>What technology does your company mainly use?</label>
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                      className="multi"
                    />
                  </div>

                  <div className="mb-10">
                    <label>When was your company founded?</label>
                    <input
                      name="date"
                      type="date"
                      placeholder="What is your startup's name?"
                      value={values.date}
                      onChange={handleChange('date')}
                      onBlur={handleBlur('date')}
                      className="input"
                    />
                  </div>
                  <button
                    type="button"
                    className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                    onClick={() => {
                      handleSubmit();
                      final();
                    }}
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </>
              )}
            </Formik>
          </form>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
}
