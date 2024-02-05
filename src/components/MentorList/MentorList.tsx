import React from 'react';
import { useState } from 'react';
import { MentorListWrapper, StyledList } from './StyledMentorList';

interface Mentor {
  mentorId: number;
  name: string;
  age: string;
  speciality: string[];
  mentorState: boolean;
}

interface MentorListProps {
  selected: boolean;
}

const MentorList: React.FC<MentorListProps> = ({ selected }) => {
  const [selectedMentors, setSelectedMentors] = useState<Mentor[]>([]);
  const mentorList: Mentor[] = [
    {
      mentorId: 0,
      name: 'Dave',
      age: '26',
      speciality: ['Javascript, ', 'React, ', 'Imbedded'],
      mentorState: false,
    },
    {
      mentorId: 1,
      name: 'Dawson',
      age: '26',
      speciality: ['Java, ', 'Spring Boot'],
      mentorState: false,
    },
    {
      mentorId: 2,
      name: 'Donald',
      age: '28',
      speciality: ['Python, ', 'Data Binding, ', 'SQL'],
      mentorState: false,
    },
  ];

  const handleToggleSelect = (mentorId: number) => {
    setSelectedMentors((prevMentors) =>
      prevMentors.map((mentor) =>
        mentor.mentorId === mentorId
          ? { ...mentor, mentorState: !mentor.mentorState }
          : mentor,
      ),
    );
  };

  const mentorListRender = mentorList.map((mentor) => (
    <StyledList key={mentor.mentorId}>
      <p>Mentor ID: {mentor.mentorId}</p>
      <p>Name: {mentor.name}</p>
      <p>Age: {mentor.age}</p>
      <p>Specialty: {mentor.speciality}</p>
      <button onClick={() => handleToggleSelect(mentor.mentorId)}>
        {mentor.mentorState ? 'Deselect' : 'Select'}
      </button>
    </StyledList>
  ));

  return (
    <div>
      <MentorListWrapper>{mentorListRender}</MentorListWrapper>
    </div>
  );
};

export default MentorList;
