import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <h2>JustinTime</h2>
        <div className="footer__top--social-icons">
          <a
            href="https://www.facebook.com/justin.cho.98622"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/jcmaker0627/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/jcmaker" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            href="https://wakatime.com/@jcmaker0627"
            target="_blank"
            rel="noreferrer"
          >
            <AccessAlarmsIcon />
          </a>
        </div>
      </div>
      <div className="footer__middle">
        <p>"Very cool words or sentence"</p>
        <p>what should i say??</p>
        <span>- Justin</span>
      </div>
      <div className="footer__bottom">
        <h5>&copy;JustinTime</h5>
      </div>
    </div>
  );
};

export default Footer;
