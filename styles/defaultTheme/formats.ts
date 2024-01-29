const formats = {
  date: {
    weekday: 'long' as const,
    month: 'long' as const,
    day: 'numeric' as const,
    year: 'numeric' as const
  },
  time: {
    hour: 'numeric' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
    hour12: true
  }
};

export default formats;
