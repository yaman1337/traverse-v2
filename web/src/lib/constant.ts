export const BACKEND_URI: string = "http://localhost:9000"

export default function capitalizeFirstLetter(str: string) {
    // Check if the input string is not empty
    if (str.length === 0) {
        return str;
    }

    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}
