//@flow
import * as React from 'react';
import Container from '../../components/Container/Container';
import { Section } from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import {CenterBlock} from '../../components/Block/Block';
import Page from '../../components/Page/Page.js';
import './Index.less';
import Meetups from "./Meetups";

function Index() {
    return (
        <Page name='index'>
            <Container fullWidth>
                <Banner />
            </Container>
            <Section alternate>
                <CenterBlock header="This year's event...">
                    <p>
                        Trondheim Developer Conference (TDC) is a community driven event for
                        developers and digital designers.
                    </p>
                    <Meetups />
                    <p>
                        The above communities have joined forces and are giving developers and designers in the greater
                        Trondheim
                        region and Norway an arena for learning, networking and communication across all development
                        disciplines.
                    </p>

                    <p>
                        The agenda consists of multiple tracks for front-end, back-end, agile developers, and digital
                        design.
                        The conference strives to reach a balance between local, national and international speakers,
                        and a relatively large share of call-for-presentation submissions.
                    </p>

                    <p>
                        TDC is a noncommercial event where all profit goes towards next year's conference
                        and other community events throughout the year in Trondheim.
                        For example, some of the profits from TDC is used to rent a venue where all user groups
                        can meetup throughout the year, and the statutes of the conference is to help existing
                        and new user groups to create an arena where every developer in Trondheim can meet for great
                        talks,
                        lively discussions and networking.
                    </p>
                </CenterBlock>
            </Section>
            <Section alternate>
                <Stats />
            </Section>
        </Page>
    );
}

export default Index;
