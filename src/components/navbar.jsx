const NavBar = () => {
  return (
    <div className="shadow-lg top-0">
      <div className="w-[80%] mx-auto flex justify-between py-6 ">
        <h1 className="text-black text-2xl font-medium">REACT LANDING PAGE</h1>
        <div className="text-gray-400 text-base flex gap-10">
          <a href="/">FEATURES</a>
          <a href="/">ABOUT</a>
          <a href="/">SERVICES</a>
          <a href="/">GALLLERY</a>
          <a href="/">TESTIMANIALS</a>
          <a href="/">TEAM</a>
          <a href="/">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
