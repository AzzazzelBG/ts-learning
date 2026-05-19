import { z } from "zod";

const EnvSchema = z.object({
    BASE_URL: z.string().url().default("http://localhost:3000"),
    API_TIMEOUT: z.coerce.number().default(5000),
    DEBUG: z.coerce.boolean().default(false)
});

export const env = EnvSchema.parse(process.env);