//import sessions from '../sessions.json';
const baseUrl = 'https://api.trondheimdc.no/public/allSessions/TDC2019';
//const baseUrl = `${sessions}`;

export function getAllSessions() {
    return fetch(baseUrl);
}

export function getSingleSession(url) {
    const fixedUrl = url.replace('http:', 'https:');
    return fetch(fixedUrl);
}
