import { contextFactory } from "../utils/contextFactory";
import useSessionContextState from "hooks/useSessionContextState";
import type { SessionContextState } from "hooks/useSessionContextState";
import { initialSessionContextState } from "utils/initialContextStates";

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
};
