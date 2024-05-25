import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ApplyGayak = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    tradition: "",
    experience: "",
    fees: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
    console.log(formDetails);
  };

  const btnClick = async (e) => {
    e.preventDefault();
    console.log("The appication data is ", formDetails);
    try {
      await toast.promise(
        axios.post(
          "/Gayak/applyforGayak",
          {
            formDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Gayak application sent successfully",
          error: "Unable to send Gayak application",
          loading: "Sending Gayak application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="register-section flex-center apply-Gayak"
        id="contact"
      >
        <div className="register-container flex-center contact">
          <h2 className="form-heading">Apply for Gayak</h2>
          <form className="register-form ">
            <select
              name="tradition"
              className="form-input"
              value={formDetails.tradition}
              onChange={inputChange}
            >
              <option value="">Choose your LokGeet tradition</option>
              <option value="Vivah">Vivah Geet</option>
              <option value="Sohar">Sohar Geet</option>
              <option value="Rai">Rai Geet</option>
              <option value="Faguaa">Faguaa Geet</option>
              <option value="Bhagat">Bhagat Geet</option>
              <option value="Gari">Gari Geet</option>
              <option value="Anjuri">Anjuri Geet</option>
              <option value="Baruaa">Baruaa(yagyopaveet) Geet</option>
              <option value="Mundan">Mundan Sanskar Geet</option>
              <option value="Parchan">Parchan Geet</option>
              <option value="kunva">kunva Poojan ka Maarg Geet</option>
              <option value="Baba">Baba Fag Dahka</option>
              <option value="Dadra">Dadra</option>
              <option value="Belanhai">Belanhai Gari Geet</option>
            </select>

            <input
              type="number"
              name="experience"
              className="form-input"
              placeholder="Enter your experience (in years)"
              value={formDetails.experience}
              onChange={inputChange}
            />
            <input
              type="number"
              name="fees"
              className="form-input"
              placeholder="Enter your fees  (in ruppes)"
              value={formDetails.fees}
              onChange={inputChange}
            />
            <button type="submit" className="btn form-btn" onClick={btnClick}>
              apply
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyGayak;
