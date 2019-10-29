import React from "react";
import {
    useParams
} from "react-router-dom";
import {getFavorites, getSessions, LoadingState, Session, toggleFavourite} from "./data";

import {Failure, Loading, makeSwitchExaustive} from "./Program";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import {Twitter} from "react-feather";

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
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-white">{session.title}</h1>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5">
                <div className='col-md-4'>
                    <FontAwesomeIcon icon={faStopwatch} aria-hidden='true'/>
                    &nbsp;{session.length} minutes
                </div>
                <div className='col-md-4'>
                    <FontAwesomeIcon icon={faLocationArrow} aria-hidden='true'/>
                    &nbsp;{session.room}
                </div>
                <div className='col-md-4'>
                    <FontAwesomeIcon icon={faGlobeEurope} aria-hidden='true'/>
                    &nbsp;{session.language === "en" ? "English" : "Norwegian"}
                </div>
            </div>

            {session.video &&
            <div className="row">
                <div className="col-md-12 text-center text-white">
                    <iframe className='vimeo'
                            title="program video"
                            src={`https://player.vimeo.com/video/${session.video}`}
                            frameBorder="0"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
            }

            <div className="row">
                <div className="col-md-12 text-center text-white">
                    <p>{session.abstract.split('\n')
                        .map((item, i) => {
                        return <span key={i}>{item}<br /></span>;
                    })}</p>

                    {
                        session.intendedAudience.length > 1 &&
                        (<>
                            <h2>Intended audience</h2>
                            <p>{session.intendedAudience.split('\n')
                                .map((item, i) => {
                                    return <span key={i}>{item}<br /></span>;
                                })}</p>
                        </>)
                    }
                </div>
            </div>
            {session.speakers.map(speaker => (
                <div key={speaker.name}>
                    <div className="row mb-3" >
                        <div className="col-md-12 text-center">
                            <h2>
                                <span className='mr-2'>{speaker.name}</span>
                                <a href={`https://twitter.com/${speaker.twitter.replace('@', '')}`}>
                                    <Twitter />
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img className='img-fluid' src={speaker.pictureUrl} alt={speaker.name}/>
                        </div>
                        <div className="col-md-6 text-left">
                            <p>{speaker.bio}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>);
};
