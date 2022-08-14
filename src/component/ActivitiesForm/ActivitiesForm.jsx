import React, { useRef, useState } from "react";
import "./ActivitiesForm.css";
import { useNavigate } from 'react-router-dom'
const ActivitiesForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    navigate('/')
  };

  const handleCancel = () =>{
    navigate('/')
  }
  return (
    <div>
      <form className="activity-form" onSubmit={handleSubmit}>
        <div className="fromcard">
          <div className="manualLable">
            <div className="lableName">
              <label for="actname">Name </label>
            </div>
            <input
              type="text"
              name="actname"
              pattern="^[A-Za-z0-9]{3,16}$"
              required
            />
            <span className="actForm-span">
              should be input& shouldn't be special character
            </span>
          </div>
          <div className="manualLable">
            <div className="lableName">
              <label for="date">Date </label>
            </div>
            <input name="date" id="birthday" type="datetime-local" required />
          </div>
          <div className="manualLable">
            <div className="lableName">
              <label for="type">Type </label>
            </div>
            <select name="type" required>
            <option value="">Choose Your Activites Type</option>
              <option value="run">Run</option>
              <option value="walk">Walk</option>
              <option value="bicycle">Bicycle</option>
              <option value="swim">Swim</option>
              <option value="hiKe">Hike</option>
            </select>
            <span className="actForm-span-type">Type be input</span>
          </div>

          <div className="manualLable">
            <div className="lableName">
              <label for="Duration">Duration </label>
            </div>
            <input type="time" name="Duration" required />
            <span className="actForm-span">Duration Should be input</span>
          </div>

          <div className="manualLable">
            <div className="lableName">
              <label for="des">Description </label>
            </div>
            <textarea id="des" name="des" rows="6" cols="25"></textarea>
          </div>
        </div>
        <div className="summitCard">
          <button type="submit">Save</button>
        </div>
          <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ActivitiesForm;
