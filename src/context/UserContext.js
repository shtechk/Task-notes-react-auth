import { createContext } from "react";

const UserContext = createContext();

// above, the UserContext is in a "global state" (this is why we create the function here, and use it to wrap the root (return) file in App.js). usually, the global state is used either for "user" or "theme" (ex. dark theme).
// do not abuse the global state, because it refreshes everything, so only use it for "user" or "theme"

export default UserContext;
