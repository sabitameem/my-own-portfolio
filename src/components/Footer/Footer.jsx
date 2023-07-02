

const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-28 py-[80px] h-[200px]">
        <div className="container mx-auto text-center my-auto text-gray-600">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sabita Binte Hoque Meem. All rights reserved.
          </p>
          <p className="text-sm">
            Built with <span className="text-red-500">❤</span> using React and Tailwind CSS
          </p>
        </div>
      </footer>
    );
};

export default Footer;