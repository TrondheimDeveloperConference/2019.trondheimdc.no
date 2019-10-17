import React from 'react';
import {getFavorites, getFilters, getSessions, LoadingState, Session, toggleFavourite} from "./data";
import program_jumbotron from '../media/img/jumbotron/programme_jumbotron.png';
import {Link} from "react-router-dom";

interface ProgramProps {
}

interface ProgramState {
    filter: Filter
    loadingState: LoadingState,
    sessions: Session[],
    favorites: string[]
}
type days = 'mon' | 'tue' | 'all';
class Filter {
    constructor(
        readonly day: days = 'all',
        readonly language: 'en' | 'no' | 'both' = 'both',
        readonly format: 'all' | 'presentation' | 'workshop' | 'fav' | 'X' = 'all'
    ) { }
}

const MondayPrefix = '2019-10-28';
const TuesdayPrefix = '2019-10-29';

function getDayPrefix(day: days): string {
    if (day === 'mon') {
        return MondayPrefix;
    } else if (day === 'tue') {
        return TuesdayPrefix;
    } else {
        return 'all';
    }
}

export default class Program extends React.PureComponent<ProgramProps, ProgramState> {
    constructor(props: ProgramProps) {
        super(props);
        this.state = {
            filter: new Filter(),
            loadingState: LoadingState.LOADING,
            sessions: [],
            favorites: []
        }
    }

    componentDidMount() {
        Promise.all([getSessions(), getFavorites(), getFilters()])
            .then(([sessions, favorites, filters]) => {
                this.setState({
                    sessions,
                    favorites,
                    filter: filters ? filters : new Filter(),
                    loadingState: LoadingState.LOADED
                })
            }).catch(rejected => {
            this.setState({
                loadingState: LoadingState.ERROR
            })
        })
    }

    render() {
        return <>
            <section className="jumbotron text-left bg-warning">

                <div className="container text-left d-md-flex flex-md-equal">
                    <div className="overflow-hidden">
                        <img src={program_jumbotron} className="img-fluid"  alt=''/>
                    </div>
                </div>
            </section>
            <div id="events" className="container text-white py-4">
                {this.getContent(this.state)}
            </div>

        </>
    }

    private getContent(state: ProgramState) {
        const loadingState = state.loadingState;
        switch (loadingState) {
            case LoadingState.LOADING:
                return <Loading/>;
            case LoadingState.ERROR:
                return <Failure/>;
            case LoadingState.LOADED:
                return <SessionList favorites={state.favorites}
                                    sessions={this.filterSessions(state.sessions, state.filter, state.favorites)}
                                    addToFav={(sessionId: string) => this.toggleFavorite(sessionId)}/>;
            default:
                makeSwitchExaustive(loadingState);
        }
    }

    private filterSessions(sessions: Session[], filter: Filter, fav: string[]) {
        const {day, language, format} = filter;
        const dayPrefix = getDayPrefix(day);

        return sessions
            .filter(s => day === 'all' || s.startTime.startsWith(dayPrefix))
            .filter(s => language === 'both' || s.language === language)
            .filter(s => format === 'all' || s.format === format || (format === 'fav' && fav.includes(s.sessionId)));
    }

    private toggleFavorite(sessionId: string) {
        toggleFavourite(sessionId)
            .then(favs => {
                this.setState({favorites: favs});

            });
    }
}


export const Failure: React.FC = () => {
    return (
        <div className='program__loading'>
            <h2 className='program__loading-header'>Woooops!</h2>
            It seems something is seriously wrong here. We are most likely informed and working on it, so just try again
            in a while.
        </div>
    )
};

export const  Loading: React.FC = () => {
    return (
        <div className='program__loading'>
            <h2 className='program__loading-header'>Loading program...</h2>
            Hold on one second, fetching program!
        </div>
    )
};

interface SessionListProps {
    sessions: Session[];
    favorites: string[];
    addToFav: (sessionId: string) => void;
}

function SessionList(props: SessionListProps) {
    return (
        <>
            <Day favorites={props.favorites} addToFav={props.addToFav}
                 title='Conference' key='conference'
                 sessions={props.sessions} dayFilter={MondayPrefix}/>
            <Day favorites={props.favorites} addToFav={props.addToFav}
                 title='Workshops' key='workshope'
                 sessions={props.sessions} dayFilter={TuesdayPrefix}/>
        </>
    );
}

interface DayProps {
    sessions: Session[];
    favorites: string[];
    addToFav: (sessionId: string) => void;
    title: string;
    dayFilter: string;
}

function Day(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith(props.dayFilter));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
            <div>
                <h2>{props.title}</h2>
                {Object
                    .keys(timeSlots)
                    .map((timeSlot, idx) => {
                        return <div key={timeSlot + idx}>
                            <h3>{timeSlot.substr(-5)}</h3>
                            {timeSlots[timeSlot]
                                .map((session, idx) => {
                                    return <div key={session.sessionId}
                                                className='row row-striped calendar-event my-5 py-3'>
                                        <div className='col-md-10 col-sm-12'>
                                            <h4 className='text-uppercase'>
                                                <Link to={`/program/${session.sessionId}`}>
                                                    <strong>{session.title}</strong>
                                                </Link>
                                            </h4>
                                            <ul className='list-inline'>
                                                <li className='list-inline-item'>
                                                    <i className='fas fa-stopwatch' aria-hidden='true'></i>
                                                    {session.length} minutes
                                                </li>
                                                <li className='list-inline-item'>
                                                    <i className='fas fa-location-arrow' aria-hidden='true'></i>
                                                    {session.room}
                                                </li>
                                                <li className='list-inline-item'>
                                                    <i className='fas fa-globe-europe' aria-hidden='true'></i>
                                                    {session.language === "en" ? "English" : "Norwegian"}
                                                </li>
                                                {session.speakers.map(speaker => (
                                                    <li key={speaker.name} className='list-inline-item'>
                                                        <i className='fas fa-user' aria-hidden='true'></i>
                                                        <a href={`https://twitter.com/${speaker.twitter}`}>
                                                            {speaker.name}
                                                        </a>
                                                    </li>))}
                                            </ul>
                                        </div>
                                    </div>
                                })}
                        </div>
                    })}
            </div> : null
    );
}

function groupByTimeSlot(sessions: Session[]): {[a: string]: Session[]} {
    const sorted = sessions.sort(function(a, b) {
        return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });
    const grouped = sorted.reduce(function(rv: {[a: string]: Session[]}, x: Session) {
        (rv[x['startTime']] = rv[x['startTime']] || []).push(x);
        return rv;
    }, {});
    return grouped;
}

export function makeSwitchExaustive(_unused: never): never {
    throw new Error('This should never happen because compiler will find this bug!');
}
