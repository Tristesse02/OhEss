import React, { useCallback } from "react";
import useSyncedClock from "hooks/useSyncedClock";
import useLocaleDateTime from "hooks/useLocaleDateTime";
import StyledClock from "styles/components/system/Taskbar/StyledClock";

const Clock = (): JSX.Element => {
  const [now, setNow] = React.useState(new Date());
  const { date, time, dateTime } = useLocaleDateTime(now);
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
