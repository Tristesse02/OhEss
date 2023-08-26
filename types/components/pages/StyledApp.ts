type Theme = {
  colors: {
    primary: string;
  };
};

export type StyledAppProps = {
  children: React.ReactNode;
  theme?: Theme;
};
