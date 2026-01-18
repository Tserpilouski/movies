import { z } from "zod";

const addToWatchlistSchema = z.object({
    movieId: z.string().uuid(),
    status: z
        .enum(["PLANED", "WATCHED", "COMPLETED", "DROPPED"], {
            error: () => ({
                message:
                    "Status mus be one of: PLANED, WATCHED, COMPLETED, DROPPED",
            }),
        })
        .optional(),
    rating: z.coerce
        .number()
        .int("Rating must be an integer")
        .min(1)
        .max(10)
        .optional(),
    notes: z.string().optional(),
});

export { addToWatchlistSchema };
