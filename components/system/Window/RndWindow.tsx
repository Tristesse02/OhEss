import React, { useEffect } from "react";
import { Rnd } from "react-rnd";
import useRnd from "hooks/useRnd";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";

interface RndWindowProps {
  children: React.ReactNode;
  id: string;
}

const RndWindow = ({ children, id }: RndWindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { maximized }
    }
  } = useProcesses();

  const rndRef = React.useRef<Rnd | null>(null);
  const rndProps = useRnd(id, maximized);
  const { setWindowStates } = useSession();

  console.log(rndRef);
  useEffect(() => {
    const { current } = rndRef ?? {};

    return () => {
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [id]: {
          position: current?.props.position,
          size: current?.props.size
        }
      }));
    };
  }, [id, setWindowStates]);

  return (
    <Rnd ref={rndRef} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
