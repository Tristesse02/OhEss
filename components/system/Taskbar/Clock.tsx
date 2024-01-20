import React, { useCallback } from "react";
import useSyncedClock from "hooks/useSyncedClock";
import useLocaleTimeDate from "hooks/useLocaleTimeDate";
import StyledClock from "styles/components/system/Taskbar/StyledClock";

const Clock = (): JSX.Element => {
  const [now, setNow] = React.useState(new Date());
  const { date, time, dateTime } = useLocaleTimeDate(now);
  const updateClock = useCallback(() => {
    setNow(new Date());
  }, [setNow]);

  useSyncedClock(updateClock);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
