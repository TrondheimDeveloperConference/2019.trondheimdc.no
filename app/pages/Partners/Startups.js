import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
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

const imagesContext = require.context('../../assets/partners-18', false, /\.svg$/);
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
                        <Col key={partner.name}>
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

function Startups() {
    return (
        <Page name='starups'>
            <PageHeader subHeader="Join us in 2019">Dear Trondheim Startups</PageHeader>

            <Section>
                <LeftBlock header="We want to support you!">
                    <p>
                        Every year we support the local entrepreneurial ecosystem. We gladly sponsor stands for local startups.

                        The only thing we require is that you’re developing IT-based solutions and
                        it shouldn’t be more than 5 years since the company was started.
                        To give as many as possible the opportunity to attend, we prioritise new startups
                        which haven’t had a stand at TDC before.
                    </p>

                    LENKE TIL SKJEMA HER
                </LeftBlock>
            </Section>
{/*            <Section alternate pixel>
                <Header align='center'>Partners</Header>
                <PartnerList partners={partners} />
            </Section>*/}
            <Section fluid>
                <ImageBlock image={partners2} alt="JavaZone Expo" />
            </Section>
        </Page>
    )
}

export default Startups;