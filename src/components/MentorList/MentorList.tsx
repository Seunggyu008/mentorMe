import React from 'react';
import { useState } from 'react';

export default function MentorList() {
  const mentorList = [
    {
      mentorId: 0,
      name: 'Dave',
      age: '26',
      specialty: ['Javascript', 'React', 'Imbedded'],
    },
    {
      mentorId: 1,
      name: 'Dawson',
      age: '26',
      specialty: ['Java', 'Spring Boot', 'Valor'],
    },
    {
      mentorId: 2,
      name: 'Donald',
      age: '28',
      specialty: ['Python', 'Data Binding', 'SQL'],
    },
  ];

  const [mentorIndex, setMentorIndex] = useState(mentorList);

  const mentorListRender = mentorList.map((mentorList) => (
    <li>{mentorList}</li>
  ));

  return <div></div>;
}
