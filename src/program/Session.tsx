import React from "react";
import {
    useParams
} from "react-router-dom";
import {getFavorites, getSessions, LoadingState, Session, toggleFavourite} from "./data";

import {Failure, Loading, makeSwitchExaustive} from "./Program";

const Wrapper: React.FC = () => {
    const {sessionId} = useParams();
    return (<ProgramSession sessionId={sessionId || ''}/>);
};
export default Wrapper;

interface SessionProps {
    sessionId: string
}

interface SessionState {
    loadingState: LoadingState,
    session?: Session,
    favorite?: boolean
}
class ProgramSession extends React.PureComponent<SessionProps, SessionState> {
    constructor(props: SessionProps) {
        super(props);
        this.state = {
            loadingState: LoadingState.LOADING,
        }
    }

    componentDidMount() {
        Promise.all([getSessions(), getFavorites()])
            .then(([sessions, favorites]) => {
                const {sessionId} = this.props;
                const session = sessions.find(s => s.sessionId === sessionId);
                const favorite = favorites.indexOf(sessionId || '') !== -1;
                const loadingState = session ? LoadingState.LOADED : LoadingState.ERROR;
                this.setState({
                    session,
                    favorite,
                    loadingState
                })
            }).catch(rejected => {
            this.setState({
                loadingState: LoadingState.ERROR
            })
        })
    }

    render() {
        return <>
            <div className="container text-white py-4">
                {this.getContent(this.state)}
            </div>
        </>
    }

    private getContent(state: SessionState) {
        const loadingState = state.loadingState;
        switch (loadingState) {
            case LoadingState.LOADING:
                return <Loading/>;
            case LoadingState.ERROR:
                return <Failure/>;
            case LoadingState.LOADED:
                // @ts-ignore
                return <SessionContent session={state.session}
                                       isFavourite={state.favorite || false}
                                       toggleFavourite={(s: string) => this.toggleFavorite(s)}/>;
            default:
                makeSwitchExaustive(loadingState);
        }
    }

    private toggleFavorite(sessionId: string) {
        toggleFavourite(sessionId)
            .then(favs => {
                this.setState({favorite: favs.indexOf(sessionId) !== -1});
            });
    }
}

interface SCP {
    session: Session;
    isFavourite: boolean;
    toggleFavourite: (id: string) => void
}
const SessionContent: React.FC<SCP> = (props) => {
    const {session} = props;
    return (<div>
        <div className="container first mb-5">
            <h1 className="text-right pr-5 pt-4 text-white">{session.title}</h1>
            <div className="d-md-flex flex-md-equal">

                <div className="col-md-6">
                    <div className="text-left pr-5 pt-4 text-white">
                        <div>
                            <i className='fas fa-stopwatch' aria-hidden='true'></i>
                            {session.length} minutes
                        </div>
                        <div>
                            <i className='fas fa-location-arrow' aria-hidden='true'></i>
                            {session.room}
                        </div>
                        <div>
                            <i className='fas fa-globe-europe' aria-hidden='true'></i>
                            {session.language === "en" ? "English" : "Norwegian"}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-left text-white mt-4">
                    <div className="text-left pr-5 pt-4 text-white">
                        <h2>Description</h2>
                        <p>{session.abstract}</p>

                        <h2>Indended audience</h2>
                        <p>{session.intendedAudience}</p>
                    </div>
                </div>

            </div>
            <div className="d-md-flex flex-md-equal">
                {session.speakers.map(speaker => (
                    <div>
                        <h2>
                            <a key={speaker.name} href={`https://twitter.com/${speaker.twitter}`}>
                                {speaker.name}
                            </a>
                        </h2>
                        <img src={speaker.pictureUrl} alt={speaker.name}/>
                        <p>{speaker.bio}</p>
                    </div>
                ))}
            </div>
            </div>
    </div>);
};
