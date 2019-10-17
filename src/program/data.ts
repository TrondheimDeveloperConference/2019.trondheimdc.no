export class Session {
    constructor(
        readonly abstract: string,
        readonly confrenceId: string,
        readonly endTime: string,
        readonly endTimeZulu: string,
        readonly format: string,
        readonly intendedAudience: string,
        readonly language: string,
        readonly length: string,
        readonly level: string,
        readonly room: string,
        readonly sessionId: string,
        readonly speakers: Speaker[],
        readonly startTime: string,
        readonly startTimeZulu: string,
        readonly title: string,
        readonly video: string,
        readonly registerLoc: string
    ){}
}

export class Speaker {
    constructor(
        readonly bio: string,
        readonly name: string,
        readonly pictureId: string,
        readonly pictureUrl: string,
        readonly twitter: string
    ){}
}

export enum LoadingState {ERROR, LOADING, LOADED }

function transformSession(s: any): Session {
    return new Session(
        s.abstract,
        s.confrenceId,
        s.endTime,
        s.endTimeZulu,
        s.format,
        s.intendedAudience,
        s.language,
        s.length,
        s.level,
        s.room,
        s.sessionId,
        s.speakers.map((sp: any) => new Speaker(sp.bio, sp.name, sp.pictureId, sp.pictureUrl, sp.twitter)),
        s.startTime,
        s.startTimeZulu,
        s.title,
        s.video,
        s.registerLoc
    );
}

//cheesy cache
export let sessions: Promise<Session[]> | undefined = undefined;

export function getSessions(): Promise<Session[]> {

    if (sessions) {
        return sessions;
    }

    sessions = fetch('https://api.trondheimdc.no/public/allSessions/TDC2019')
        .then(response => response.json())
        .then(json => json.sessions)
        .then((sessions: any[]) => sessions.map(s => transformSession(s)));

    return sessions;
}

const FAVORITES_KEY = 'favorites';
const FILTER_KEY = 'filters';

function portOldFavourites() {
    try {
        const storedFavorites = localStorage.getItem('programsettings_v3');
        if (!!storedFavorites) {
            const settings = JSON.parse(storedFavorites);
            const favorites = settings.favorites;
            if (!!favorites) {
                // @ts-ignore
                const sessionIds = favorites.map(f => f.sessionId);
                setFavorites(sessionIds);
                localStorage.removeItem('programsettings_v3');
            }
        }
    } catch (e) {
        console.log(e);
    }
}

export function getFavorites(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        portOldFavourites();
        const favorites = localStorage.getItem(FAVORITES_KEY) || '[]';
        resolve(JSON.parse(favorites))
    })
}

export function toggleFavourite(sessionId: string): Promise<string[]> {
    return getFavorites()
        .then(favorites => {
            const isFavorite = favorites.indexOf(sessionId) !== -1;
            if (isFavorite) {
                const filtered = favorites.filter(id => id !== sessionId);
                setFavorites(filtered);
                return filtered;
            } else {
                const added = [sessionId].concat(sessionId);
                setFavorites(added);
                return added;
            }
        })
        .then(favourites => setFavorites(favourites))
}

function setFavorites(favorites: string[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return favorites;
}


export function getFilters(): Promise<any> {
    return new Promise<string[]>((resolve, reject) => {
        const filters = localStorage.getItem(FILTER_KEY);
        filters ? resolve(JSON.parse(filters)) : resolve()
    })
}

export function setFilters(filters: object) {
    localStorage.setItem(FILTER_KEY, JSON.stringify(filters))
}
