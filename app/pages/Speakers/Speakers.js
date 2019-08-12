//@flow
import * as React from 'react';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { CenterBlock, LeftBlock, ImageBlock } from '../../components/Block/Block';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import { Section } from '../../components/Section/Section';
import { Link } from '../../components/link';
import {Dl, Dt, Dd} from '../../components/definition-list';
import Timeline from '../../components/timeline';
import speakers1 from '../../assets/speakers_1.jpg';
import speakers2 from '../../assets/speakers_2.jpg';
import speakers3 from '../../assets/speakers_3.jpg';
import './Speakers.less';

type SpeakerProps = {
}

const Format = (props) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <p justify={"true"} className='format__description'>{props.description}</p>
    </li>
);

const presentations = {
    icon: 'icon-graduation',
    title: 'Presentations',
    length: '30 minutes',
    description: 'Presentations at TDC are 30 minutes long.'
};

const workshops = {
    icon: 'icon-screen-desktop',
    title: 'Workshops',
    length: '2 hours, 4 hours, 8 hours',
    description: 'We will continue the popular workshop concept with a range of sessions on Tuesday October 29th and 30th. The format for the workshops is in-depth, hands-on and interactive.'
};

function Speakers(props: SpeakerProps) {
    return (
        <Page name='speakers'>
            <PageHeader subHeader="Speak at TDC 2019">Call for speakers</PageHeader>
            <Section>
	            <CenterBlock header="About Trondheim Developer Conference">
                    <p>
                   		TDC 2019 will be the 7th consecutive Trondheim Developer Conference, and will consist of a day of presentations on October 28th and hands on workshops on the following two days.
					</p>
					<p>
                        Last year's event was completely sold out, with more than 700 attendees enjoying more than 30 sessions.
                    </p>
                    <p>TDC hosts both internationals and home-grown Norwegian talent as speakers. We'd love to have you join us in 2019!
                    </p>
                    <p>
                        <br />
                        Our call for speakers for 2019 is closed, and the speakers are chosen! Check back in April 2020 to submit a proposal for TDC 2020§
                    </p>
	            </CenterBlock>
	        </Section>

            <ImageBlock image={speakers1} alt="Speakers page separator image" />

	        <Section>
		        <LeftBlock header="What is it like speaking at Trondheim Developer Conference?">
                    <p>
                        TDC has become the most important IT event in the Trondheim area! You can see for yourself
                        – 178 videos from previous years talks are available for free at <a href='https://vimeo.com/trondheimdc'>Vimeo</a>,
                        and the <a href='https://2018.trondheimdc.no/program'>full program from TDC 2018</a> is also available.
                    </p>
                    <p>
                        We can brag as much as we want, but TDC would be nothing without all the great speakers!
                        That's why we need your help to make sure that TDC 2019 will be at least as awesome as the earlier events.
                        If you think you have something interesting to share, please submit your talk or workshop at the latest on June 3rd 2019.
                    </p>
                    <p>
                        Trondheim Developer Conference is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                    </p>
	            </LeftBlock>
	        </Section>

            <ImageBlock image={speakers2} alt="Speakers page separator image" />

	        <Section>
	            <CenterBlock>
		            <div className='speakers__formats'>
	                    <span className='icon-clock'></span>
	                </div>
	            </CenterBlock>

				<LeftBlock header="Formats and Durations">
                    <p>
                        You should think about which format your talk will work
                        best in. Are you presenting a new idea, or do you require
                        more time to elaborate on your subject? How hands-on do
                        you want to be? We have two formats you can present
                        your material in.
                    </p>
	            </LeftBlock>
	            <CenterBlock>
	                <ul className='presentation-formats'>
	                    <Format {...presentations} />
	                    <Format {...workshops} />
	                </ul>
	            </CenterBlock>

	            <LeftBlock header="Audience and Topics">
	                    <p>
	                        TDC is a conference for developers and everything IT, with an emphasis on technical talks.
                            However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
	                    </p>
	            </LeftBlock>

	            <LeftBlock header="Ongoing Evaluation of Talks">
                    <p>
                        Each year we receive many submissions and we consider each submission as it arrives.
                        Due to the large amount of submission we can however not guarantee that you hear from us immediately.
                        We do however answer all submissions and try to do so no later than in August.
                    </p>
                    <p>
                        Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit,
                        the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers tsunami!
                    </p>
                </LeftBlock>
                <CenterBlock>
                    <p>
                        <Button link='/speakers/tips'>
                            Some tips and tricks about your submission
                        </Button>
                    </p>
	            </CenterBlock>
	        </Section>

            <ImageBlock image={speakers3} alt="Speakers page separator image" />

            <Section>
	            <CenterBlock header="Dates & Deadlines for Trondheim Developer Conference 2019">
	                <p>
	                </p>
                    <Timeline />
	            </CenterBlock>

	            <LeftBlock header="What’s in it for me?">
	                    <Dl className='speakers__accepted'>
	                        <Dt className='speakers__accepted-title'>Accepted presentations and workshops</Dt>
	                        <Dd className='speakers__accepted-description'>You get free admission to the conference. Additionally you are also invited to the speakers' dinner, held on October 27th.</Dd>
	                        <Dt className='speakers__accepted-title'>Coverage of Expenses</Dt>
	                        <Dd className='speakers__accepted-description'>Please see our <Link href='/speakers/monetary-policy'>reimbursement policy</Link> if you have any questions regarding coverage of other expenses.</Dd>
	                    </Dl>
	            </LeftBlock>

            	<LeftBlock header="Important principles">
                    <p>
                        TDC is proud to be an independent and community-driven conference.
                        It is organized by volunteers from many of Trondheims IT-meetups and is run as a non-profit organisation.
                        This means that we have three important principles for selecting talks:
                    </p>
                    <ul className='speakers__list'>
                        <li className='speakers__principle'>We do not sell speaker slots.</li>
                        <li className='speakers__principle'>We do not accept sales pitches masked as presentations</li>
                        <li className='speakers__principle'>We do not differentiate between speakers from partners and independent speakers</li>
                    </ul>
                    <p>
                        If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                    </p>
	            </LeftBlock>

	            <CenterBlock>
                        <p>
                            <br />
                            <a className='button button--transparent' href="http://submitit.trondheimdc.no">Submit a talk</a>
                        </p>
	            </CenterBlock>

	            <CenterBlock header="We hope to see you at TDC 2019 – please feel free to spread the word to your local community!">
	                    <p className='speakers__regards'>
	                        <br />
	                        Best regards,<br />the Trondheim Developer Conference Program Committee
	                    </p>
	            </CenterBlock>
	        </Section>
        </Page>
    )
}

export default Speakers;