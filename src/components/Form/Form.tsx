import React from 'react';

const FormSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center w-full py-16"
      style={{ backgroundImage: 'url(/images/Form-background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      <div className="relative z-10 p-8 rounded-lg shadow-lg max-w-md w-full lg:mr-8 sm:mx-auto lg:ml-auto">
        <h2 className="text-2xl font-bold mb-6 text-white text-center lg:text-left">
          Stay up to date on the latest for military jobs and recruiting.
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <button
              className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
