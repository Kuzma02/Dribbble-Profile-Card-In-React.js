import React from "react";
import ProfileImg from "../assets/ProfileImg.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const DribbbleProfileCard = () => {
  return (
    <section className="dribbble-profile-card">
      <div className="card-top">
        <span className="pro">PRO</span>
        <img src={ProfileImg} alt="" />
      </div>
      <div className="card-content">
        <h2 className="card-content-name">Aleksandar Kuzmanovic</h2>
        <h3 className="card-content-role">Front-End Web Developer</h3>
        <p className="card-content-text">
          From Belgrade, Serbia. Big fan of web development and SEO.
        </p>
        <div className="socials">
          <FaInstagram />
          <FaSquareXTwitter />
          <FaSquareGithub />
        </div>
        <ul className="card-content-stats">
          <li>
            <span>85</span>
            <span>Shoots</span>
          </li>
          <li>
            <span>503</span>
            <span>Followers</span>
          </li>
          <li>
            <span>6</span>
            <span>Projects</span>
          </li>
        </ul>
        <button className="card-content-cta">Follow Dribbbler</button>
      </div>
    </section>
  );
};

export default DribbbleProfileCard;
