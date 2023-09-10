import netflixLogo from "../Utils/Images/Netflix_Logo_PMS.png";

const HeaderSignin = () => {
  return (
    <div>
      <div>
        <img
          className="absolute z-10 w-48 bg-gradient-to-b from-black"
          alt="Netflix Logo"
          src={netflixLogo}
        />
      </div>
    </div>
  );
};

export default HeaderSignin;
