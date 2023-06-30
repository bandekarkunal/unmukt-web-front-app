export const CheckForGlobalRole = (role: string) => {
  if (
    role === "role-program-head" ||
    role === "role-director" ||
    role === "role-mne" ||
    role === "role-tnd"
  ) {
    return true;
  }
  return false;
};
