//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { LeftBlock, CenterBlock, ImageBlock } from '../../components/Block/Block';
import info1 from '../../assets/info_1.jpg';
import tickets2 from '../../assets/tickets_2.jpg';
import partners1 from '../../assets/partners_1.jpg';

function AboutSection() {
    return (
        <Section>
            <LeftBlock header="TDC 101 the who, what and where">
                <p>
                    Trondheim Developer Conference – A community-driven conference for people in the Trondheim region will be seven
                    years old in 2019! Don’t miss out on a day of inspiring tech talks,
                    a day of hands-on sessions, mingling, and a great party!
                </p>
                <p>
                    TDC is organized by several of Trondheim's meetups. Our goal is to
                    organize a community-driven conference for the regions developers where they can learn new things,
                    share knowledge, and socialize.
                </p>
                <p>
                    We have been organizing TDC since 2012 and have been excited to watch the event grow bigger
                    and better every year. In 2018 we hosted about 700 participants and 20 speakers across 5 parallel tracks.
                    In addition, we also offered a selection of 9 workshops held on the day after the conference.
                </p>
                <p>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years.
                    Don’t procrastinate!
                    Join your fellow developers at Trondheim Developer Conference on October 28th, 2019!
                </p>
            </LeftBlock>
        </Section>
    );
}

function TicketSection() {
    return (
        <Section>
            <LeftBlock header="First thing first: your ticket!">
                <p>
                    To attend TDC you will need a ticket. The ticket grants you access to the full
                    JavaZone experience, including workshops. The ticket sales ticket sales are now open.
                    The number of tickets are limited and distributed on a first-come first-served basis,
                    so it pays to be quick.
                </p>
            </LeftBlock>
            <CenterBlock>
                <p>
                    <br />
                    <a className='button button--transparent' href="/tickets">Buy Your TDC 2019 Ticket Now</a>
                </p>
            </CenterBlock>
        </Section>
    );
}

function BetterExplorerSection() {
    return (
        <Section>
            <LeftBlock header="A full day of knowledge">
                <p>
                    A day full of talks from renowned Norwegian and international speakers, in varying formats
                    and categories. {/*You don‘t want to miss our <a href="/program">amazing lineup</a>.*/}
                </p>
            </LeftBlock>
            <LeftBlock header="An after party to remember">
                <p>
                    Trondheim Developer Conference's traditional party takes place on the evening after the conference.
                    After a long day of unique learning experiences, it feels good to chill out with some good food and drink.
                    <br /><br />

                    The party offers a great chance to catch up with old friends, and meet new ones!!
                </p>
            </LeftBlock>
            <LeftBlock header="Hands-on workshops">
                <p>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and
                    boost your knowledge and skills.
                    Workshops will be held after the conference.
                </p>
            </LeftBlock>
            <LeftBlock header="... and a whole lotta love">
                <p>
                    You will meet lots of interesting people at Trondheim Developer Conference! Grab your coffee and mingle away!
                </p>
            </LeftBlock>
        </Section>
    );
}


function ProgramSection() {
    return (
        <Section>
            <LeftBlock header="The TDC program">
                <p>
                    The full program is now <a href="/program">available online</a>.
                </p>
            </LeftBlock>
            <LeftBlock header="Presentations">
                <p>
                    Presentations at TDC have a length of 30 or 45 minutes.
                </p>
            </LeftBlock>
            <LeftBlock header="Workshops">
                <p>
                    Full blown learning sessions. This is where you get down and dirty with code. This year we’ll
                    be offering a wide variety of 2-hour and 4-hour workshops.
                </p>
            </LeftBlock>
        </Section>
    );
}

function QuestionSection() {
    return (
        <Section>
            <LeftBlock header="Questions?">
                <p>
                    Do not hesitate to contact us if you have any questions.
                    Contact us at <a href='mailto:connect@trondheimdc.no'>connect@trondheimdc.no</a> and we’ll try our best to give you an answer.
                </p>
                <p>
                    We are looking forwards to seeing you at Trondheim Developer Conference 2019!
                </p>
            </LeftBlock>
        </Section>
    );
}


function Info() {
    return (
        <Page name='info'>
            <PageHeader subHeader="October 28th, 2019" subSubHeader="Trondheim - Norway">Welcome to TDC 2019</PageHeader>
            <AboutSection />
            {/*<TicketSection />*/}
            <ImageBlock image={tickets2} alt="Tickets" />
            <BetterExplorerSection />
            <ImageBlock image={info1} alt="Info" />
            {/*<ProgramSection />*/}
            <QuestionSection />
        </Page>
    );
}

export default Info;