import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    objective: '',
    education: [''],
    experience: [''],
    skills: [''],
    achievements: ['']
  });

  const handleInputChange = (field, value, index = null) => {
    setResumeData(prevData => {
      if (index !== null) {
        const newArray = [...prevData[field]];
        newArray[index] = value;
        return { ...prevData, [field]: newArray };
      }
      return { ...prevData, [field]: value };
    });
  };

  const addField = (field) => {
    setResumeData(prevData => ({
      ...prevData,
      [field]: [...prevData[field], '']
    }));
  };

  const removeField = (field, index) => {
    setResumeData(prevData => ({
      ...prevData,
      [field]: prevData[field].filter((_, i) => i !== index)
    }));
  };

  const renderInputs = (field, placeholder) => (
    <div className="input-group">
      <h3>{placeholder}</h3>
      {resumeData[field].map((item, index) => (
        <div key={index} className="input-row">
          <input
            type="text"
            placeholder={`${placeholder} ${index + 1}`}
            value={item}
            onChange={(e) => handleInputChange(field, e.target.value, index)}
            className="text-input"
          />
          <button onClick={() => removeField(field, index)} className="remove-button">
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => addField(field)} className="add-button">
        Add {placeholder}
      </button>
    </div>
  );

  return (
    <div className="resume-builder">
      <h1>Simple Resume Builder</h1>
      
      <div className="personal-info">
        <input
          type="text"
          placeholder="Full Name"
          value={resumeData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="text-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={resumeData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="text-input"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={resumeData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="text-input"
        />
      </div>

      <div className="input-group">
        <h3>Professional Summary</h3>
        <textarea
          placeholder="Your professional summary"
          value={resumeData.summary}
          onChange={(e) => handleInputChange('summary', e.target.value)}
          className="text-area"
        />
      </div>

      <div className="input-group">
        <h3>Career Objective</h3>
        <textarea
          placeholder="Your career objective"
          value={resumeData.objective}
          onChange={(e) => handleInputChange('objective', e.target.value)}
          className="text-area"
        />
      </div>

      {renderInputs('education', 'Education')}
      {renderInputs('experience', 'Experience')}
      {renderInputs('skills', 'Skill')}
      {renderInputs('achievements', 'Achievement')}

      <div className="button-container">
        <button className="generate-button">
          Generate Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;