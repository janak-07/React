import "./App.css";
import s1Image from "./image/s1.jpg";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black text-white p-4 text-center text-xl font-bold">
          <ul className="flex justify-around">
            <div className="text-2xl">
              <span className="text-[#ff1212]">Janak</span>Diyora
            </div>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </header>

        {/* Main Content */}
        <main className="flex">
          <section>
            {/* Public Folder Image */}
            <div>
              <img src={s1Image} alt="Sample Image" className="w-100%" />
            </div>
          </section>
        </main>
        <section>
          <div className="font-[800] bg-amber-200 h-50">
            <h1 className="text-7xl">
              Elevate Your Business with Targols{" "}
              <span className="ml-126">Solutions</span>
            </h1>
          </div>
          <div className="w-full h-30  bg-black text-white">
            <p className="max-w-4xl mx-auto text-center">
              At Targols Solutions, we specialize in web development, web
              design, and digital marketing to help your business thrive in the
              digital world. Our expert team combines creativity with
              cutting-edge technology to deliver tailored solutions that drive
              growth and success. Whether you need a stunning website, effective
              marketing strategies, or comprehensive digital solutions, we are
              your trusted partner.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © Targols Solutions 2024 - All Rights Reserved
        </footer>
      </div>
    </>
  );
};

export default App;
