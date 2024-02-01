import React from 'react';
import MentorList from './components/MentorList/MentorList';
import GlobalStyle from './components/style/GlobalStyle';

const App: React.FC = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <h1>Find Your Mentor</h1>
      <div>
        <p>List of Available Mentors</p>
        <MentorList selected={false} />
      </div>
      <div>
        <p>Mentors You Have Selected</p>
        <MentorList selected={true} />
      </div>
    </div>
  );
};

export default App;
