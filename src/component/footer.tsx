import Group from "../assets/Group.png";

const Footer = () => {
  return (
    <div className="flex justify-between text-white bg-black">
      <div className="flex items-center justify-center h-20 gap-4 px-4 lg:px-20">
        <img src={Group} /> Samsul Arifin
      </div>
      <div className="flex items-center justify-center h-20 px-4 lg:px-20">
        @{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
