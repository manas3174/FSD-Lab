import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    fatherFirstName: '',
    fatherLastName: '',
    motherFirstName: '',
    motherLastName: '',
    gender: 'male',
    nationality: '',
    streetAddress: '',
    city: '',
    country: '',
    mobileNumber: '',
    whyJoin: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">College Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name: </label>
          <div className="name-inputs">
            <input
              type="text"
              name="firstName"
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Father's Name: </label>
          <div className="name-inputs">
            <input
              type="text"
              name="fatherFirstName"
              placeholder='First Name'
              value={formData.fatherFirstName}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              name="fatherLastName"
              placeholder='Last Name'
              value={formData.fatherLastName}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Mother's Name: </label>
          <div className="name-inputs">
            <input
              type="text"
              name="motherFirstName"
              placeholder='First Name'
              value={formData.motherFirstName}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              name="motherLastName"
              placeholder='Last Name'
              value={formData.motherLastName}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Nationality: </label>
          <input
            type="text"
            name="nationality"
            placeholder='Nationality'
            value={formData.nationality}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Home Address: </label>
          <input
            type="text"
            name="streetAddress"
            placeholder='Street Address'
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="form-input"
          />
          <div className="address-inputs">
            <input
              type="text"
              name="city"
              placeholder='City'
              value={formData.city}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              name="country"
              placeholder='Country'
              value={formData.country}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Why do you want to become a student of our College?</label>
          <textarea
            name="whyJoin"
            rows={4}
            value={formData.whyJoin}
            onChange={handleInputChange}
            className="form-textarea"
          />
        </div>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
    </div>
  );
};

export default Form;