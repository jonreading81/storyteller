interface NavigationJSON {
  navigation: {
    groups: {
      name: string;
    }[];
  };
}

export const getNavigation = async () => {
  const navigation = await fetch("http://localhost:3000/navigation");
  return (await navigation.json()) as NavigationJSON;
};
