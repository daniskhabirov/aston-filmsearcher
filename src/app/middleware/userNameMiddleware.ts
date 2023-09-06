import { MiddlewareAPI, createListenerMiddleware } from "@reduxjs/toolkit";

import { userLoggedIn } from "../reducers/userSlice";

const userNameMiddleware = createListenerMiddleware();

userNameMiddleware.startListening({
  actionCreator: userLoggedIn,
  effect: async (action, store: MiddlewareAPI) => {
    if (action.payload.displayName !== store.getState().user.userName) {
      action.payload = {
        ...action.payload,
        displayName: action.payload.displayName || action.payload.email,
      };
      store.dispatch(action);
    }
  },
});

export default userNameMiddleware;
