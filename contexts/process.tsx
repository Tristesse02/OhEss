import { contextFactory } from "../utils/contextFactory";
import useProcessContextState from "hooks/useProcessContextState";
import type { ProcessContextState } from "hooks/useProcessContextState";
import { initialProcessContextState } from "utils/initialContextStates";

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
