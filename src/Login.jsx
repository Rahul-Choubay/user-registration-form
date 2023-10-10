import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [mark, setMark] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skill, setSkill] = useState('');
  
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [markError, setMarkError] = useState(false);
  const [educationError, setEducationError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [skillError, setSkillError] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username && password && dob && email && number && mark && education && experience && skill) {
      const data = {
        username,
        password,
        dob,
        number,
        email,
        mark,
        education,
        experience,
        skill
      };
      setUser(data);
      alert('Form submitted!');
      
      // Clear input values
      setUsername('');
      setPassword('');
      setDob('');
      setEmail('');
      setNumber('');
      setMark('');
      setEducation('');
      setExperience('');
      setSkill('');
      
      // Reset error states
      setUsernameError(false);
      setPasswordError(false);
      setDobError(false);
      setEmailError(false);
      setNumberError(false);
      setMarkError(false);
      setEducationError(false);
      setExperienceError(false);
      setSkillError(false);
    } else {
      alert('Please fill in all fields');
      setUsernameError(!username);
      setPasswordError(!password);
      setDobError(!dob);
      setEmailError(!email);
      setNumberError(!number);
      setMarkError(!mark);
      setEducationError(!education);
      setExperienceError(!experience);
      setSkillError(!skill);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div><h2>Registration Form</h2></div>
       
        {usernameError && <span style={{ color: 'red' }}>Please enter a username</span>}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        
        {passwordError && <span style={{ color: 'red' }}>Please enter a password</span>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          autoComplete="current-password"
        />
        
        {dobError && <span style={{ color: 'red' }}>Please enter your date of birth</span>}
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Date of Birth"
        />
        
        {numberError && <span style={{ color: 'red' }}>Please enter your phone number</span>}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
        />
        
        {emailError && <span style={{ color: 'red' }}>Please enter your email</span>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        
        {markError && <span style={{ color: 'red' }}>Please enter your mark</span>}
        <input
          type="text"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          placeholder="Mark"
        />
        
        {educationError && <span style={{ color: 'red' }}>Please enter your education</span>}
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Education"
        />
       
        {experienceError && <span style={{ color: 'red' }}>Please enter your experience</span>}
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience"
        />
        
        {skillError && <span style={{ color: 'red' }}>Please enter your skill</span>}
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Skill"
        />
        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
