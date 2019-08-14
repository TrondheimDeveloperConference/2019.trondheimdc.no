import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import partners from '../../data/partners';
import partners1 from '../../assets/partners_1.jpg';
import partners2 from '../../assets/partners_2.jpg';
import { CenterBlock, ImageBlock, LeftBlock } from '../../components/Block/Block';
import { SubHeader } from '../../components/Header/Header';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { Link } from '../../components/link';
import './Partners.less';

function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../../assets/2019/partners', false);
const images = imagesContext.keys().map(image => (
    {context: imagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

type PartnerListProps = {
    partners: []
}

function PartnerList(props: PartnerListProps) {
    const shuffled = shuffle(props.partners);
    return (
        <Grid fluid>
            <Row className="partners-list-container">
                {shuffled.map((partner) => {
                    return (
                        <Col key={partner.name} className="partner">
                            <Link href={partner.url} className="partners-list-item">
                                <img className="partner-logo" src={getimage(images, partner.logo).context} alt={partner.name}/>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Grid>
    );
}

function Partners() {
    return (
        <Page name='partners'>
            <PageHeader subHeader="Join us in 2019">Dear Trondheim Developer Conference Partners</PageHeader>

            <Section>

                <LeftBlock header="Register your interest">
                    <p>
                        Fill out <a href='https://docs.google.com/forms/d/e/1FAIpQLSdTF8Enin4i4uo13RINMKXdee7mkjZBG7PpNW5jnzJ7utXexw/viewform?usp=sf_link'>our form</a> or <a href='mailto:connect@trondheimdc.no'>send us an email!</a>
                    </p>
                </LeftBlock>
                <LeftBlock header="Last three years: Completely. Sold. Out.">
                    <p>
                        Last year, more than 800 people attended Trondheim Developer Conference.
                        This was also the third year where we were completely sold out of both tickets AND partner stands.
                        Based on this and feedback from last years partners we‘ve got a feeling that we
                        might sell out this year as well. So don‘t wait around if you
                        want to be part of TDC 2019!
                    </p>
                </LeftBlock>
                <LeftBlock header="Our philosophy: Partners, not sponsors">
                    <p>
                        We want the expo area to be an attractive space where our partners and participants can hang out and spend time together.
                        In previous years our partners have done a great job to help us achieve this goal,
                        and we look forward to seeing what they bring to Trondheim Developer Conference 2019!
                        TDC’s expo area is a vibrant, busy space full of life and activity.
                        As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere.
                    </p>
                </LeftBlock>
            </Section>
            <Section alternate pixel>
                <CenterBlock header="Partners">
                    <PartnerList partners={partners} />
                </CenterBlock>
            </Section>
            <Section fluid>
                <ImageBlock image={partners2} alt="TDC Expo" />
            </Section>
            <Section>
                <CenterBlock header="The expo area">
                    <p>
                        All our partner stands are traditionally located in the expo area, which is centrally located in the venue.
                        During each break, the Expo is full of attendees.
                    </p>
                </CenterBlock>
            </Section>

            <Section dark>
                <LeftBlock header="Partner options">
                    <p>
                        All partners are considered equal. Because of the conference venue, Clarion Congress,
                        we don't have that much of an possibility for expansions.
                    </p>
                    <SubHeader>Included in all partnerships</SubHeader>
                    <ul className='list'>
                        <li className='list__item'>
                            A stand in the Expo Area (6 square meters, 2m x 3m).
                        </li>
                        <li className='list__item'>
                            One conference ticket for the stand crew.
                        </li>
                        <li className='list__item'>
                            Branding on <a href='https://2019.trondheimdc.no/partners'>2019.trondheimdc.no</a>,
                            at the venue, the program, and in other promotional material that
                            we produce.
                        </li>
                    </ul>
                </LeftBlock>
            </Section>
            <Section fluid>
                <ImageBlock image={partners1} alt="TDC Expo" />
            </Section>
            <Section>
                <CenterBlock header="Contact Us">
                    <p>
                        You can contact us about partnership details at <a href='mailto:connect@trondheimdc.no'>connect@trondheimdc.no</a>.
                    </p>
                </CenterBlock>
            </Section>
        </Page>
    )
}

export default Partners;