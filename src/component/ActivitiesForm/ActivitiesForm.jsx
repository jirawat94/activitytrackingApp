import React from 'react'
import './ActivitiesForm.css'

const ActivitiesForm = () => {
    const handleSubmit = () =>{
        alert('Send Activities')
    }
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <div className="fromcard">
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="actname">Name </label>
                        </div>
                        <input type="text" name="actname" required/>
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="date" >Date </label>
                        </div>
                        <input id='birthday' type="date"    required/>
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="type">Type </label>
                        </div>
                        <select name="type" required>
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
                        <input type="time" name="Duration"  required/>
                    </div>

                    <div className="manualLable">
                        <div className="lableName">
                            <label for="des">Description </label>
                        </div>
                        <textarea id="des" name="des" rows="6" cols="25" required></textarea>
                    </div>
                </div>
                <div className="summitCard">
                    <button>Cancel</button>
                    <button   type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default ActivitiesForm