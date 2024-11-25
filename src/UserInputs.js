import React from 'react';
import './index.css';


const UserInputs = ({ handlefield, userdata, errors, handleSubmit, handleReset }) => {

  return (
    <div className='form-container'>
      <form className='input-form' onSubmit={handleSubmit}>

        <h2>USER FORM</h2>

        <div className="form-group">
          <label className="form-label" htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            maxLength={20}
            className={`form-input ${!errors.firstName && userdata.firstName ? 'input-success' : 'input-error'}`}
            value={userdata.firstName}
            onChange={handlefield}
          />

        </div><span className={`error-message ${errors.firstName ? 'visible' : 'hidden'}`}>{errors.firstName}</span>


        <div className="form-group">
          <label className="form-label" htmlFor="lastName">Last Name:</label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            className={`form-input ${!errors.lastName && userdata.lastName ? 'input-success' : 'input-error'}`}
            value={userdata.lastName}
            onChange={handlefield}
          />
        </div>
        <span className={`error-message ${errors.lastName ? 'visible' : 'hidden'}`}>{errors.lastName}</span>


        <div className="form-group">
          <label className="form-label" htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            className={`form-input ${!errors.dob && userdata.dob ? 'input-success' : 'input-error'}`}
            value={userdata.dob}
            onChange={handlefield}
          />
        </div>
        <span className={`error-message ${errors.dob ? 'visible' : 'hidden'}`}>{errors.dob}</span>

        <div className="form-group">
          <label className="form-label" htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            className={`form-input ${!errors.age && userdata.age ? 'input-success' : 'input-error'}`}
            value={userdata.age}
            onChange={handlefield}
          />
        </div>
        <span className={`error-message ${errors.age ? 'visible' : 'hidden'}`}>{errors.age}</span>

        <div className="form-group">
          <label className="form-label" htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            className={`form-select ${!errors.gender && userdata.gender ? 'input-success' : 'input-error'}`}
            value={userdata.gender}
            onChange={handlefield}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <span className={`error-message ${errors.gender ? 'visible' : 'hidden'}`}>{errors.gender}</span>

        <div className="form-group">
          <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={`form-input ${!errors.phoneNumber && userdata.phoneNumber ? 'input-success' : 'input-error'}`}
            value={userdata.phoneNumber}
            onChange={handlefield}
          />
        </div>
        <span className={`error-message ${errors.phoneNumber ? 'visible' : 'hidden'}`}>{errors.phoneNumber}</span>


        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-input ${!errors.email && userdata.email ? 'input-success' : 'input-error'}`}
            value={userdata.email}
            onChange={handlefield}
          />
        </div>
        <span className={`error-message ${errors.email ? 'visible' : 'hidden'}`}>{errors.email}</span>

        <div className='submit-button'>
          <button type="submit" className="form-submit">Submit</button>
          <button type='button' className="form-reset" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default UserInputs;
