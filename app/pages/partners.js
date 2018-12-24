import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P, Pc} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';
import { Link } from '../components/link';
import partners from '../data/partners';
import partners1 from '../assets/partners_1.jpg';
import partners2 from '../assets/partners_2.jpg';
import partners3 from '../assets/partners_3.jpg';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript#6274381
function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../assets/partners-18', false, /\.svg$/);
const images = imagesContext.keys().map(image => (
    {context: imagesContext(image), filename: image}
));

function getimage(images, image) {
    return images.find(img => img.filename.indexOf(image) >= 0);
}

const signedPartners = shuffle(partners).map(partner => (
    {name: partner.name, logo: getimage(images, partner.logo), url: partner.url}
));

const Partner = ({name, logo, url}) => (
    <li className='partners__logo'>
        <a className='partners__logo-link' href={url} target='_blank'>
            <img src={logo.context} className='partners__logo-image' alt={name} />
        </a>
    </li>
);

const Partners = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>Dear JavaZone Partners</LargeHeading>
            <SmallHeading>Join us in 2018</SmallHeading>
        </Heading>
        <Container>
            <Block>
                <Header><span>JavaZone 2018:<br />bigger and better than ever</span></Header>
                <Content>
                    <P>
                        JavaZone started out in 2002 as a small conference for Java developers but has since then evolved
                        to become one of the largest developer conferences in the world. Each year thousands of people gather
                        in Oslo Spektrum for three full days of learning, mingling, and fun!
                    </P>
                </Content>
            </Block>

            <Block>
                <Header><span>Last two years:<br />Completely. Sold. Out.</span></Header>
                <Content>
                    <P>
                        Last year, a record-breaking 3100 people attended JavaZone.
                        This was also the second year where we were completely sold out of both tickets AND partner stands.
                        Based on this and feedback from last years partners we‘ve got a feeling that we
                        might sell out this year as well. So don‘t wait around if you
                        want to be part of JavaZone 2018!
                    </P>
                </Content>
            </Block>

            <Block>
                <Header><span>Our philosophy:<br />partners, not sponsors</span></Header>
                <Content>
                    <P>
                        We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together.
                        In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018!
                        JavaZone’s Expo Area is a vibrant, busy space full of life and activity.
                        As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere.
                        We work closely with our Partners to help them realize their ideas and make the most out of their stands.
                        Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                    </P>
                </Content>
            </Block>

            <img className='partners__image' src={partners2} />

            <Block>
                <Header><span>The Expo Area</span></Header>
                <Content>
                    <P>
                        All our partner stands are traditionally located in the Expo Area, which is centrally located in the venue.
                        During each break, the Expo is full of attendees. This is partly because we serve food continuously from
                        restaurant stands throughout the day, and partly because of you – our Partners – make this area one of
                        the liveliest Expo Areas of any conference.
                    </P>

                    <SubHeader>People! People everywhere!</SubHeader>

                    <P>
                        Don‘t you believe us? Have a look for yourself! Our new Partners are always surprised by the
                        huge attention their stands receive in the Expo Area. We have put together a short 15-second
                        timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the breaks between talks.
                        Yes, you get exposure to that many people, for a total of 20 hours!
                    </P>

                    <P>
                    </P>

                </Content>
            </Block>

            <Container>
                <Youtube id='IVLtxmuzfl4'></Youtube>
            </Container>

            <Block>
                <Header><span>Partner Options</span></Header>
                <Content>
                    <P>
                        Even though all Partners are considered equal, there are
                        a few options to choose from. There is a base package that
                        everyone gets, and then there are a few available expansions. Notice that these expansions have a limited availability.
                    </P>

                    <SubHeader>Included in all partnerships</SubHeader>

                    <ul className='list'>
                        <li className='list__item'>
                            A stand in the Expo Area (6 square meters).
                        </li>
                        <li className='list__item'>
                            4 flexible, nameless expo tickets for the stand crew.
                        </li>
                        <li className='list__item'>
                            Discounted participant tickets for your employees.
                        </li>
                        <li className='list__item'>
                            Branding on <a href='http://javazone.no'>javazone.no</a>,
                            at the venue, the program, and in other promotional material that
                            JavaZone produces.
                        </li>
                    </ul>

                    <SubHeader>Possible expansions</SubHeader>

                    <dl className='definition-list'>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option'>Double Stand Space</span>
                        </dt>
                        <dd className='definition-list__data'>
                            Double your stand space and get 12 square meters instead of 6. This gives you a bigger wall for your message and more floor space for your activities.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand-option'>Restaurant Stand</span>
                        </dt>
                        <dd className='definition-list__data'>
                            We have the capacity for a total of 8 restaurant stands in the Expo Area. The theme and menu are decided by you in collaboration with our food provider.
                            If you have a restaurant stand, you can also opt in for extra food servings and exposure during the evening party.
                        </dd>
                        <dt className='definition-list__term'>
                            <span className='partners__stand-option partners__stand'>Concept Stand</span>
                        </dt>
                        <dd className='definition-list__data'>
                            We also have room for 3 extra large ‘Concept‘ stands. These stands have about 70 square meters floor space and have room for a 4-meter tall wall behind it. This is your choice if you want to be really creative.
                        </dd>
                    </dl>
                </Content>
            </Block>

            <img className='partners__image' src={partners1} />

            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader><span>Partnership Prices</span></CHeader>
                <CContent>
                    <div className="partners__mainprice partners__stand-option">NOK 69.000,-</div>
                    <em>Note that all 50 partnerships for JavaZone 2017 were sold out long before the conference.</em>
                    <P>
                        All partnerships have a base price for entry which gives you everything described above.<br />
                        We also have some add ons, as well as tickets for your employees, priced below.<br />
                        <em className="partners__latebirdprice">After March 1st, the base price increases to NOK 84.000,-</em><br />
                        <span className="partners__vat">all prices ex VAT</span>
                    </P>
                    <div className='partners__prices'>
                        <div className='partners__stand-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row partners__stand-option partners__stand-option'>
                                        <td className='table__data'>Extra Stand Space</td>
                                        <td className='table__data'>NOK 38.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option'>
                                        <td className='table__data'>Restaurant Stand</td>
                                        <td className='table__data'>NOK 63.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option'>
                                        <td className='table__data'>Restaurant Stand (Evening)</td>
                                        <td className='table__data'>NOK 20.000,-</td>
                                    </tr>
                                    <tr className='table__row partners__stand-option partners__stand-option'>
                                        <td className='table__data'>Concept Stand</td>
                                        <td className='table__data'>NOK 55.000,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='partners__ticket-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (0 - 30)</td>
                                        <td className='table__data'>NOK 5.590,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (31 - 50)</td>
                                        <td className='table__data'>NOK 5.390,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (51 - ∞)</td>
                                        <td className='table__data'>NOK 5.190,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Tickets for employees (Late-Bird)</td>
                                        <td className='table__data'>NOK 6.190,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CContent>
            </CBlock>

            <img className='partners__image' src={partners3} />

            <Block>
                <Header><span>Contact us</span></Header>
                <Content>
                    <P>
                        You can contact us about partnership details at <a href='mailto:partner@java.no'>partner@java.no</a>.
                    </P>
                </Content>
            </Block>

            <CBlock>
                <CContent>
                    <P>
                        <Link className='button button--transparent' href='/partnermote-desember'>Slides from last partner meeting (in Norwegian)</Link>
                    </P>
                </CContent>
            </CBlock>
        </Container>

    </Page>
);

export default Partners;