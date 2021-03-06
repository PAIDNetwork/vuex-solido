import { SolidoLoadedPayload, SolidoSetupPayload } from "./types";


export const solidoMutations = {
  SOLIDO_ENTITY_LOADED: (
    state: any,
    { success, name, error }: SolidoLoadedPayload
  ) => {
    if (!state.solido) {
      state.solido = {};
    }

    if (!state.solido.loaded) {
      state.solido.loaded = {};
    }

    state.solido.loaded[name] = { success, error };
  },
  SOLIDO_WALLET_SETUP: (state: any, { success, error }: SolidoSetupPayload) => {
    if (!state.solido) {
      state.solido = {};
    }
    state.solido.walletSetup = { success, error };
  }
};
