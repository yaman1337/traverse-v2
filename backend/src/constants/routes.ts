export const routes = {
    AUTH: {
        LOGIN: "/login",
        REGISTER: "/register"
    },
    PLACES: {
        GET_ALL_PLACES: "/all",
        GET_PLACE_BY_ID: "/detail/:id",
        CREATE_PLACE: "/create",
        CONTRIBUTIONS: "/contributions"
    },
    REVIEWS: {
        CREATE: "/create",
        GET_ALL_REVIEWS: "/all/:place_id"
    }
}