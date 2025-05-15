import React, { useState } from 'react';
import '../App.css';
import './Content.css';

const Content = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storyType: '',
    storyTitle: '',
    storyContent: '',
    attachment: null,
    anonymous: false,
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container-section">
      <h2 className="section-title">Citizen Journalism: Your Voice Matters</h2>
      <p>
        Citizen journalism plays a vital role in uncovering untold stories and highlighting overlooked issues. 
        Whether you're submitting a story, sharing a tip, or blowing the whistle, your contributions can make a difference.
      </p>

      <form onSubmit={handleSubmit} className="submission-form">
        <label>
          Name: 
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your full name" 
            required 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your email address" 
            required 
          />
        </label>

        <label>
          Phone (Optional):
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Your phone number" 
          />
        </label>

        <label>
          Story Type:
          <select name="storyType" value={formData.storyType} onChange={handleChange} required>
            <option value="">Select a type</option>
            <option value="story">Story</option>
            <option value="tip">Tip</option>
            <option value="whistleblow">Whistleblow</option>
          </select>
        </label>

        <label>
          Story Title:
          <input 
            type="text" 
            name="storyTitle" 
            value={formData.storyTitle} 
            onChange={handleChange} 
            placeholder="Title of your story" 
            required 
          />
        </label>

        <label>
          Story Content:
          <textarea 
            name="storyContent" 
            value={formData.storyContent} 
            onChange={handleChange} 
            placeholder="Write your story or tip here" 
            rows="6" 
            required
          ></textarea>
        </label>

        <label>
          Attachment (Optional):
          <input 
            type="file" 
            name="attachment" 
            onChange={handleFileChange}
          />
        </label>

        <label>
          Submit Anonymously:
          <input 
            type="checkbox" 
            name="anonymous" 
            checked={formData.anonymous} 
            onChange={handleChange} 
          />
        </label>

        <label>
          <input 
            type="checkbox" 
            name="termsAccepted" 
            checked={formData.termsAccepted} 
            onChange={handleChange} 
            required 
          />
          I agree to the terms and conditions.
        </label>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Content;
