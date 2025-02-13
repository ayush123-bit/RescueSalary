import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "rescueSalary", // Unique app ID
  name: "RescueSalary",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});