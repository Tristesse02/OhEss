import React from "react";
import useLocaleDateTime from "hooks/useLocaleDateTime";
import StyledClock from "styles/components/system/Taskbar/StyledClock";
import useClock from "hooks/useClock";

const Clock = (): JSX.Element => {
  const now = useClock();
  const { date, time, dateTime } = useLocaleDateTime(now);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
