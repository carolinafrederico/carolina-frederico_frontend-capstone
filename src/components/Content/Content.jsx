import React, { useState } from 'react';
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

  const [successMessage, setSuccessMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submissionData = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          submissionData.append(key, formData[key]);
        }
      }

      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        body: submissionData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log("Form successfully submitted:", result);
      setSuccessMessage("Thank you! Your submission was received.");
      
      // Reset form
      setFormData({
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

    } catch (err) {
      console.error("Error submitting form:", err);
      setSuccessMessage("There was an error. Please try again later.");
    }
  };

  return (
    <div className="citizen-page">
      <div className="citizen-header">
        <h2>Citizen Journalism: Your Voice Matters</h2>
        <p>
          Citizen journalism plays a vital role in uncovering untold stories and highlighting overlooked issues. 
          Whether you're submitting a story, sharing a tip, or blowing the whistle, your contributions can make a difference.
        </p>
      </div>

      <div className="citizen-form-container">
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="citizen-form">
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

          <label className="consent-group">
            <input 
              type="checkbox" 
              name="anonymous" 
              checked={formData.anonymous} 
              onChange={handleChange} 
            />
            Submit Anonymously
          </label>

          <label className="consent-group">
            <input 
              type="checkbox" 
              name="termsAccepted" 
              checked={formData.termsAccepted} 
              onChange={handleChange} 
              required 
            />
            I agree to the terms and conditions.
          </label>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Content;



// import React, { useState } from 'react';
// // import '../App.css';
// import './Content.css';

// const Content = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     storyType: '',
//     storyTitle: '',
//     storyContent: '',
//     attachment: null,
//     anonymous: false,
//     termsAccepted: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, attachment: e.target.files[0] });
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("http://localhost:3001/submit-form", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit the form");
//     }

//     const result = await response.json();
//     console.log("Form successfully submitted:", result);

//   } catch (err) {
//     console.error("Error submitting form:", err);
//   }
// };
//   return (
//     <div className="citizen-page">
//       <h2 className="citizen-title">Citizen Journalism: Your Voice Matters</h2>
//       <p>
//         Citizen journalism plays a vital role in uncovering untold stories and highlighting overlooked issues. 
//         Whether you're submitting a story, sharing a tip, or blowing the whistle, your contributions can make a difference.
//       </p>

//       <form onSubmit={handleSubmit} className="submission-form">
//         <label>
//           Name: 
//           <input 
//             type="text" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             placeholder="Your full name" 
//             required 
//           />
//         </label>

//         <label>
//           Email:
//           <input 
//             type="email" 
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             placeholder="Your email address" 
//             required 
//           />
//         </label>

//         <label>
//           Phone (Optional):
//           <input 
//             type="tel" 
//             name="phone" 
//             value={formData.phone} 
//             onChange={handleChange} 
//             placeholder="Your phone number" 
//           />
//         </label>

//         <label>
//           Story Type:
//           <select name="storyType" value={formData.storyType} onChange={handleChange} required>
//             <option value="">Select a type</option>
//             <option value="story">Story</option>
//             <option value="tip">Tip</option>
//             <option value="whistleblow">Whistleblow</option>
//           </select>
//         </label>

//         <label>
//           Story Title:
//           <input 
//             type="text" 
//             name="storyTitle" 
//             value={formData.storyTitle} 
//             onChange={handleChange} 
//             placeholder="Title of your story" 
//             required 
//           />
//         </label>

//         <label>
//           Story Content:
//           <textarea 
//             name="storyContent" 
//             value={formData.storyContent} 
//             onChange={handleChange} 
//             placeholder="Write your story or tip here" 
//             rows="6" 
//             required
//           ></textarea>
//         </label>

//         <label>
//           Attachment (Optional):
//           <input 
//             type="file" 
//             name="attachment" 
//             onChange={handleFileChange}
//           />
//         </label>

//         <label>
//           Submit Anonymously:
//           <input 
//             type="checkbox" 
//             name="anonymous" 
//             checked={formData.anonymous} 
//             onChange={handleChange} 
//           />
//         </label>

//         <label>
//           <input 
//             type="checkbox" 
//             name="termsAccepted" 
//             checked={formData.termsAccepted} 
//             onChange={handleChange} 
//             required 
//           />
//           I agree to the terms and conditions.
//         </label>

//         <button type="submit" className="btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Content;
