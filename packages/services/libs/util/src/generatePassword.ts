import { randomInt } from "crypto";

export function generatePassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        password += chars[randomInt(chars.length)];
    }
    return password;
}
