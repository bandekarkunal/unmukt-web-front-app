// A few components should not be shown in the header depending on a few pages. Primarily pages that require no auth code. So for such pages, we return false.

export const checkPathname = (pathname: string) => {
  if (
    pathname === "/" ||
    pathname === "/admin-signin" ||
    pathname === "/login/google"
  ) {
    return false;
  }
  return true;
};
