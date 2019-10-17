import React from "react";
import {
    useParams
} from "react-router-dom";
import {getFavorites, getSessions, LoadingState, Session, toggleFavourite} from "./data";

import program_jumbotron from "../media/img/jumbotron/programme_jumbotron.png";
import {Failure, Loading, makeSwitchExaustive} from "./Program";

interface SessionProps {
}

interface SessionState {
    loadingState: LoadingState,
    session?: Session,
    favorite?: boolean
}
export default class ProgramSession extends React.PureComponent<SessionProps, SessionState> {
    constructor(props: SessionProps) {
        super(props);
        this.state = {
            loadingState: LoadingState.LOADING,
        }
    }

    componentDidMount() {
        const {sessionId} = useParams();
        Promise.all([getSessions(), getFavorites()])
            .then(([sessions, favorites]) => {
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

    private getContent(state: SessionState) {
        const loadingState = state.loadingState;
        switch (loadingState) {
            case LoadingState.LOADING:
                return <Loading/>;
            case LoadingState.ERROR:
                return <Failure/>;
            case LoadingState.LOADED:
                return <div></div>
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
