export type PlaceKeyword = string
export type VerificationStatus = "pending" | "verified" | "rejected"

export interface PlaceAtrributes {
    title: string
    location_description: string
    image: string[]
    coordinates: [number, number]
    place_description: string
    keyword: PlaceKeyword
    author_id: string
    verification_status: VerificationStatus
    total_reviews: number
    average_rating: number
}