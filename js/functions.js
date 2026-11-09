const convertToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

const checkMeetingTime = (workDayStart, workDayEnd, meetingStart, meetingDuration) => {
  const workStartMin = convertToMinutes(workDayStart);
  const workEndMin = convertToMinutes(workDayEnd);
  const meetingStartMin = convertToMinutes(meetingStart);
  const meetingEndMin = meetingStartMin + meetingDuration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
};

// Вызываем функцию, чтобы линтер не ругался на то, что она не используется
checkMeetingTime('08:00', '17:30', '14:00', 90);
