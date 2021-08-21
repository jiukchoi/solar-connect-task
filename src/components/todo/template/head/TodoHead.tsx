import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getDate = () => {
  const date = new Date();
  const day = WEEK[date.getDay()];
  const months = MONTH[date.getMonth()];
  const dates = String(date.getDate()).padStart(2, '0');
  const years = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');
  return { day, months, dates, years, hours, mins };
};

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [day, setDay] = useState('');
  const [timer, setTimer] = useState('');
  const getTimer = () => {
    const { dates, day, hours, mins, months, years } = getDate();
    setDay(day);
    setTimer(`${months} ${dates}, ${years} ${hours}:${mins}`);
  }

  useEffect(() => {
    getTimer();
    setInterval(() => {
      getTimer();
    }, 1000)
  }, [])

  return (
    <TodoHeadBlock>
      <DayText>{day}</DayText>
      <DateText>{timer}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
