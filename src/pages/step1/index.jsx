import React, { useState } from 'react';
export const Step1 = () => {
    const [uplodedFile, setuploadedFile] = useState(null);
    const handleFileChange = (event) => {
        console.log('event fired');
        // Update the state with the selected file
        setuploadedFile(event.target.files[0]);
        console.log(event.target.files[0]);
      };
      const [phoneNumber, setPhoneNumber] = useState('');
      const [error, setError] = useState('');
    
      const handlePhoneNumberChange = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    
        if (inputNumber.length <= 10) {
          setPhoneNumber(inputNumber);
          setError('');
        } else {
          setError('Phone number should be 10 digits');
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform actions with the selected file, e.g., upload to a server
        if (uplodedFile) {
          console.log('Selected file:', uplodedFile);
          // Add your file upload logic here
        } else {
          console.log('No file selected');
        }
      };
      return (
          <div>
          <h2>Upload file and enter your details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              Phone Number:
              <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter 10-digit phone number"
              />
            </div>
            <div>
              <label htmlFor="fileInput">Choose a file:</label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .pdf. , .doc, .docx"  // Specify the accepted file types
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )
}