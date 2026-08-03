import { REVIEWS as STATIC_REVIEWS, Review } from "@/lib/data/reviews";

export type { Review };

export async function fetchReviews(): Promise<Review[]> {
    return STATIC_REVIEWS;
}
