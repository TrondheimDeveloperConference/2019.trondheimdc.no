import React from 'react';
import Program from "./Progam";

const CoC = () => {
    return <>
        <section className="jumbotron text-left bg-warning">

            <div className="container text-left d-md-flex flex-md-equal">
                <div className="overflow-hidden">
                    <img src="/media/img/jumbotron/programme_jumbotron.png" className="img-fluid" />
                </div>
            </div>
        </section>,
        <Program />
    </>;
};

export default CoC;