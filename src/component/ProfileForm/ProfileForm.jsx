import React, { useRef } from "react";
import "./ProfileForm.css";
import { useNavigate } from 'react-router-dom'

const ProfileForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    navigate('/')
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <div className="manualLabel">
        <div className="labelName">
          <label for="name">Name</label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          pattern="^[A-Za-z0-9]{3,16}$"
          //   placeholder="Input your name"
          required
        />
        <span className="actForm-span">
          should be input& shouldn't be special character
        </span>
      </div>

      <div className="manualLabel">
        <div className="labelName">
          <label for="name">Birthday</label>
        </div>
        <input
          type="date"
          id="birthday"
          name="date"
          pattern="^[A-Za-z0-9]{3,16}$"
          //   placeholder="Select your birthday"
          required
        />
      </div>

      <div className="manualLabel">
        <div className="labelName">
          <label for="name">Gender</label>
        </div>
        <select className="genderSelect">
          <option value="male">Select your Gender</option>
          <option value="male">Male</option>
          <option value="feMale">FeMale</option>
        </select>
      </div>

      <div className="manualLabel">
        <div className="labelName">
          <label for="name">Height</label>
        </div>
        <input
          type="number"
          id="name"
          name="height"
          pattern="^[A-Za-z0-9]{3,16}$"
          //   placeholder="Input your height"
          required
        />
        <span className="actForm-span">Height should be Number</span>
      </div>

      <div className="manualLabel">
        <div className="labelName">
          <label for="name">Weight</label>
        </div>
        <input
          type="number"
          id="name"
          name="weight"
          pattern="^[A-Za-z0-9]{3,16}$"
          //   placeholder="Input your weight"
          required
        />
        <span className="actForm-span">Weight should be Number</span>
      </div>

      <button className="saveButton" type="submit">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
