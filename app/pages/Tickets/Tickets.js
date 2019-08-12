//@flow
import * as React from 'react';
import { P} from '../../components/block';
import { Section } from '../../components/Section/Section';
import { CenterBlock, ImageBlock } from '../../components/Block/Block';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Page from '../../components/Page/Page';
import PageHeader from '../../components/PageHeader/PageHeader';
import tickets2 from '../../assets/tickets_2.jpg';
import './Tickets.less';

type TicketsProps = {
}

function Tickets(props: TicketsProps) {
    return (
        <Page name='tickets'>
	        <PageHeader subHeader="Come join us in Trondheim, October 28th">Tickets to TDC 2019</PageHeader>
	        <Section>
                <CenterBlock header="Get your tickets!">
                    <P><a href='https://tdc.hoopla.no/sales/tdc2019'>Tickets are available</a></P>
	            </CenterBlock>
	        </Section>

            <ImageBlock image={tickets2} alt="Tickets page separator image" />

 			<Section>
	            <CenterBlock header="Need more info about Trondheim Developer Conference?">
                    <P>
                        <br />
                        We'll release more information about the conference before the summer,
                        and the detailed program with information about all the talks will be ready in September.
                    </P>
                    <P>
                        Don't wait too long buying your ticket though – last year all of the tickets were sold,
                        and we had waiting lists. We expect a decent amout of interest this year as well.
                    </P>
	            </CenterBlock>
	        </Section>
	    </Page>
    )
}

export default Tickets;
