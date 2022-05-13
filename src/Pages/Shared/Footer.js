import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">SERVICES</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teeth Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <p>
            Panthapath,Dhaka-1200
            <br />
            <span>
              <b>Phone:</b> 999999999
              <br />
              <b>Email:</b> emailaddress@hotmail.com
            </span>
          </p>
        </div>
      </div>
      <div className="footer-center p-4 mt-5">
        <p>Copyright &copy; {new Date().getFullYear()} - All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
