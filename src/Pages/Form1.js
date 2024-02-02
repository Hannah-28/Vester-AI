import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { getAllCountries } from '@odusanya/african-countries';

export default function Form1() {
  const formikRef = useRef();
  const [, setValues] = useState();

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Startup's name is required"),
    website: Yup.string()
      .matches(
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
        'Enter correct url!'
      )
      .trim()
      .required("Startup's website is required"),
  });
  // TO FETCH THE AFRICAN COUNTRIES FROM THE NPM PACKAGE
  var countryName = [];
  getAllCountries().forEach(function (obj) {
    countryName.push(obj.name);
  });

  return (
    <Layout>
      {/* FORM PAGE 1 */}
      <div className="max-w-6xl mx-auto px-8 mb-10 mt-24 h-screen">
        <form className="shadow-md bg-gray-50 rounded-md p-7">
          <h1 className="mb-4 text-2xl font-bold">Onboarding</h1>
          <Formik
            initialValues={{
              name: '',
              website: '',
            }}
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
                  <input
                    name="name"
                    type="text"
                    placeholder="What is your startup's name?"
                    value={values.name}
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    className="input"
                  />
                  {errors.name && touched.name ? (
                    <p style={{ color: 'red' }}>{errors.name}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="website"
                    type="url"
                    placeholder="What is your startup's website?"
                    value={values.website}
                    onChange={handleChange('website')}
                    onBlur={handleBlur('website')}
                    className="input"
                  />
                  {errors.website && touched.website ? (
                    <p style={{ color: 'red' }}>{errors.website}</p>
                  ) : null}
                </div>
                <div className="mb-10">
                  <label>
                    Where in Africa is your company legally registered?
                  </label>
                  <select
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={handleChange('country')}
                    onBlur={handleBlur('country')}
                  >
                    <option value="">Select</option>
                    {countryName.map((code, i) => (
                      <option key={i} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={handleSubmit}
                  disabled={!isValid}
                >
                  <Link to={'/form-2'} state={values}>
                    CONTINUE
                  </Link>
                </button>
              </>
            )}
          </Formik>
        </form>
      </div>
    </Layout>
  );
}
