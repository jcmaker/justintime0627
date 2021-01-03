import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { useHistory } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  const history = useHistory();

  return (
    <div className="footer">
      <div className="footer__top">
        <h2
          onClick={() => {
            window.location.reload();
            history.push("/");
          }}
        >
          JustinTime
        </h2>
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
          <span
            onClick={() => {
              const textArea = document.createElement("textarea");
              textArea.value = "jcmaker0627@gmail.com";
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("Copy");
              textArea.remove();
              alert("My Email is Copied!! Crtl + V");
            }}
          >
            <EmailIcon />
          </span>
        </div>
      </div>
      <div className="footer__middle">
        <p>My Own Personal</p>
        <p>Blog</p>
        <span>- made by Justin</span>
      </div>
      <div className="footer__bottom">
        <h5>&copy;JustinTime</h5>
      </div>
    </div>
  );
};

export default Footer;
