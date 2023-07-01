const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="lg:text-5xl text-4xl font-semibold uppercase bg-gradient-to-r from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">
          SABITA
        </p>

        <button className="btn btn-sm">Work With me</button>
      </div>
    </header>
  );
};

export default Header;
