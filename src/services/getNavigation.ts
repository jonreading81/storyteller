export const getNavigation = async () => {
  const navigationJSON = await fetch("http://localhost:3000/navigation");
  return await navigationJSON.json();
};
