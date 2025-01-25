import Createformcomp from "@/src/shared/createformcomp";
import Image from "next/image";
import zapformsLogo from "../assets/zapformslogo.png"; // Static import
import ScrollEffectComponent from "@/src/shared/scrollviewEffect";

export default function Home() {
  return (
    <div>
      <Createformcomp />
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 p-8"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">
            Welcome to Zapforms
          </h1>
          <p className="text-xl text-blue-600 mb-4">
            Streamline form creation and management with ease. Zapforms provides
            powerful tools to automate and simplify your workflows.
          </p>
          <p className="text-lg text-orange-500">
            Fast, efficient, and reliable. Get started today!
          </p>
        </div>
        <div className="md:w-1/2 flex flex-row justify-center">
          <Image
            src={zapformsLogo}
            alt="About Zapforms"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
   

      <section id="features" className="bg-gray-800 text-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Easy to Use
            </h3>
            <p className="text-gray-300">
              Create forms in minutes with an intuitive interface. No coding
              required!
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Customizable Templates
            </h3>
            <p className="text-gray-300">
              Choose from a variety of templates or create your own to suit your
              needs.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Analytics
            </h3>
            <p className="text-gray-300">
              Get Track form submissions to gain valuable insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
