import React from 'react'
import './ActivitiesForm.css'

const ActivitiesForm = () => {
    return (
        <div>
            <form>
                <div className="fromcard">
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="actname">Name </label>
                        </div>
                        <input type="text" name="actname" />
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="date">Date </label>
                        </div>
                        <input type="date" name="data" value="Select data" />
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="type">Type </label>
                        </div>
                        <select name="type">
                            <option value="run">Run</option>
                            <option value="walk">Walk</option>
                            <option value="bicycle">Bicycle</option>
                            <option value="swim">Swim</option>
                            <option value="hiKe">Hike</option>
                        </select>
                    </div>

                    <div className="manualLable">
                        <div className="lableName">
                            <label for="Duration">Duration </label>
                        </div>
                        <input type="time" name="Duration" />
                    </div>

                    <div className="manualLable">
                        <div className="lableName">
                            <label for="des">Description </label>
                        </div>
                        <textarea id="des" name="des" rows="6" cols="25"></textarea>
                    </div>
                </div>
                <div className="summitCard">
                    <button>Cancel</button>
                    <button type='summit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default ActivitiesForm