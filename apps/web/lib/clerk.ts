export type clerkErrorType = {
  errors: [
    {
      message: string;
      long_message: string;
      code: string;
      meta: {
        paramName: string;
      };
    },
  ];
};
