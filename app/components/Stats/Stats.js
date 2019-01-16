//@flow
import * as React from 'react';
import Button from '../Button/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Stats.less';
import location from '../../assets/2019/icons/location.svg';
import calendar from '../../assets/2019/icons/calendar.svg';
import mic from '../../assets/2019/icons/mic.svg';
import partners from '../../assets/2019/icons/partners.svg';

type StatsProps = {
}

type StatItemProps = {
    image: string,
    children: string
}

function StatItem(props: StatItemProps) {
    return (
        <div className="stat-item">
            <img className="stat-item-image" src={props.image} alt="statImage" />
            <h2>{props.children}</h2>
        </div>
    )
}

function Stats(props: StatsProps) {

    return (
        <Grid className="stats">
            <Row center="xs">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <StatItem image={location}>Clarion Congress, Trondheim, Norway</StatItem>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <StatItem image={calendar}>October 28th</StatItem>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <StatItem image={mic}>~30 Speakers</StatItem>
                        </Col>
                        <Col xs={12} sm={6} md={3} lg={3}>
                            <StatItem image={partners}>~20 Stands</StatItem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

export default Stats;
