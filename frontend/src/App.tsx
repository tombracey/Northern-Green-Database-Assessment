import React, { useState } from 'react';
import './styles.css';

function App() {
  
  const [locationInput, setLocationInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(event.target.value);
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Form submitted with input:', locationInput);
  };

  return (      
    <>
    <div className='header'>
      <h1 className='logo'>Northern Green</h1>
      <h3 className='slogan'>Empowering Ethical Choices Online</h3>
    </div>

    <div className='description'>
      <p>Try our new feature linking you with locally-sourced goods.</p>
    </div>


    <form onSubmit={handleFormSubmission}>
      <p className='prompt'>Enter Your Location</p>
      <input
        type='text'
        value={locationInput}
        onChange={handleInputChange}
        placeholder='e.g. Uppermill'
      />
      <button type='submit'>Submit</button>
    </form>
    </>
  );
}

export default App;
