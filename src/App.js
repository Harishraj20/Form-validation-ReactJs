import React, { useState } from 'react';
import UserInputs from './UserInputs';
import Modal from './Modal';

function App() {
  const [userdata, setUserdata] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserdata(previousInputs => ({
      ...previousInputs,
      [name]: value
    }));
    validateFormElements(name, value);
  }

  function validateFirstName(value) {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    if (!value.trim()) {
      return 'First Name is a mandatory field';
    } else if (!regex.test(value)) {
      return 'First Name must start with an alphabet and cannot contain special characters';
    }
    return '';
  }
  
  function validateLastName(value) {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    if (value.trim() && !regex.test(value)) {
      return 'Last Name must start with an alphabet and cannot contain special characters';
    }
    return '';
  }
 
  function validateAge(value) {
    if (!value) {
      return 'Age is a mandatory field';
    } else if (value < 1 || value > 99) {
      return 'Invalid Age';
    }
    return '';
  }
  
  function validateGender(value) {
    if (!value) {
      return 'Gender is a mandatory field';
    }
    return '';
  }
  
  function validatePhoneNumber(value) {
    const regex = /^\d{10}$/;
    if (value && !regex.test(value)) {
      return 'Phone Number should have 10 digits';
    }
    return '';
  }
  
  function validateEmailId(value) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value && !regex.test(value)) {
      return 'Invalid Email Address';
    }
    return '';
  }
  
  const validateFormElements = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        error = validateFirstName(value);
        break;
      case 'lastName':
        error = validateLastName(value);
        break;
      case 'dob':
        break;
      case 'age':
        error = validateAge(value);
        break;
      case 'gender':
        error = validateGender(value);
        break;
      case 'phoneNumber':
        error = validatePhoneNumber(value);
        break;
      case 'email':
        error = validateEmailId(value);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const firstNameError = validateFirstName(userdata.firstName);
    const ageError = validateAge(userdata.age);
    const genderError = validateGender(userdata.gender);
    const isValid = !firstNameError && !ageError && !genderError;

    if (isValid) {
      setIsModalOpen(true);
    } else {
      setErrors({
        firstName: firstNameError,
        age: ageError,
        gender: genderError
      });
    }
  }

  function handleResetForm(){
    setUserdata({
      firstName: '',
      lastName: '',
      dob: '',
      age: '',
      gender: '',
      phoneNumber: '',
      email: ''
    })
    setErrors({})

  }
  return (
    <div>
    <UserInputs handlefield={handleInputChange} userdata={userdata} errors={errors} handleSubmit={handleFormSubmit} handleReset = {handleResetForm}/>
      {isModalOpen && <Modal  />}
    </div>
  );
}

export default App;
