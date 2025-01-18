export interface RoutesPaths {
  private: {
    [key: string]: {
      [key: string]: string;
    };
  };
  public: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const ROUTES_PATHS: RoutesPaths = {
  private: {
    book: {
      id: "/book/:id",
      create: "/book/create",
    },
    explore: {
      root: "/explore",
      allBooks: "/explore/all-books",
    },
    goals: {
      root: "/goals",
    },
    library: {
      root: "/library",
    },
    settings: {
      root: "/settings",
    },
    onboarding: {
      root: "/onboarding",
    },
  },
  public: {
    signIn: {
      root: "/signin",
    },
    signUp: {
      root: "/signup",
    },
    forgotPassword: {
      root: "/forgot-password",
    },
    resetPassword: {
      root: "/reset-password",
    },
    registrationSuccessful: {
      root: "/registration-successful",
    },
  },
};
