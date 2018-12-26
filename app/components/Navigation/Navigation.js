//@flow
import * as React from 'react';
import Container from '../Container/Container';
import Link from '../Link/Link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button/Button';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Menu } from 'react-feather'; 
import TDCLogo from '../../assets/logo/logo.svg';
import TDCLogo_white from '../../assets/logo/logo-white.svg';
import './Navigation.less';

type NavigationProps = {
    page: string
}

type NavItemProps = {
    children: React.Node,
    link: string,
    active: bool
}

type MenuButtonProps = {
    children?: React.Node,
    onClick: Function,
    showOnlyIcon: bool
}

type NavigationState = {
    hasScrolledPassedTop: bool,
    showMenuButton: bool,
    showMenu: bool,
    showOnlyIcon: bool
}

type LogoProps = {
    sticky: bool
}
function Logo(props: LogoProps) {

    let logoClass = classnames({
        'logo-nav': true
    })

    const logo = props.sticky ? TDCLogo_white : TDCLogo;
    return (
        <Link href="/" className={logoClass}>
            <img src={logo} alt="Logo" />
        </Link>
    )
}
function MenuButton(props: MenuButtonProps) {

    let menuButtonClass = classnames({
        'nav-item': true,
        'menu-button': true,
        'draw': true,
        'meet': true,
        'menu-button-text': !props.showOnlyIcon
    })

    return (
        <button onClick={props.onClick} className={menuButtonClass}>
            <Menu size={32} />
            {props.showOnlyIcon ? null : props.children}
        </button>
    )
}

function NavItem(props: NavItemProps) {

    let navItemClass = classnames({
        'nav-item': true,
        'draw': !props.active,
        'meet': !props.active,
        'active-nav-item': props.active
    })

    return <Link href={props.link} className={navItemClass}>{props.children}</Link>
}

const MENU_WIDTH = 1420;

class Navigation extends React.Component<NavigationProps, NavigationState> {

    setScrolledPassedTop: Function
    onMenuClick: Function
    setMenuButtonVisible: Function
    renderNavItems: Function
    renderMenuButton: Function
    isActiveNavItem: Function

    constructor(props: NavigationProps) {
        super(props);
        this.setScrolledPassedTop = this.setScrolledPassedTop.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.setMenuButtonVisible = this.setMenuButtonVisible.bind(this);
        this.renderNavItems = this.renderNavItems.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
        this.isActiveNavItem = this.isActiveNavItem.bind(this);
    }

    state = {
        hasScrolledPassedTop: false,
        showMenuButton: false,
        showMenu: false,
        showOnlyIcon: true
    };

    componentWillMount() {
        this.setMenuButtonVisible();
        window.addEventListener('scroll', this.setScrolledPassedTop);
        window.addEventListener('resize', this.setMenuButtonVisible);
    }

    setMenuButtonVisible(): void {
        let width = window.innerWidth;
        this.setState({
            showMenuButton: width < MENU_WIDTH ? true : false,
            showMenu: width >= 1120 ? false : this.state.showMenu,
            showOnlyIcon: width < 545 ? true : false
        })
    }

    setScrolledPassedTop(): void {
        this.setState({
            hasScrolledPassedTop: window.scrollY > 0 ? true : false
        })
    }

    onMenuClick(): void {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    isActiveNavItem(linkUrl): bool {
        return linkUrl === this.props.page;
    }

    renderNavItems() {
        return (
            <Col>
                <Row middle="xs">
                    <NavItem active={this.isActiveNavItem("/info")} link="/info">INFO</NavItem>
                    <NavItem active={this.isActiveNavItem("/tickets")} link="/tickets">TICKETS</NavItem>
                    <NavItem active={this.isActiveNavItem("/speakers")} link="/speakers">SPEAKERS</NavItem>
                    <NavItem active={this.isActiveNavItem("/program")} link="/program">PROGRAM</NavItem>
                    <NavItem active={this.isActiveNavItem("/workshops")} link="/workshops">WORKSHOPS</NavItem>
                    <NavItem active={this.isActiveNavItem("/partners")} link="/partners">PARTNERS</NavItem>
                </Row>
            </Col>
        )
    }

    renderMenuButton() {
        return (
            <Col>
                <Row middle="xs">
                    <MenuButton showOnlyIcon={this.state.showOnlyIcon} onClick={this.onMenuClick}>MENU</MenuButton>
                </Row>
            </Col>
        )
    }

    render() {
        let navClass = classnames({
            'navigation': true,
            'sticky': this.state.hasScrolledPassedTop,
            'mobile-nav': this.state.showMenu
        })

        return (
            <Grid className={navClass} fluid>
                <Row between={this.state.showMenuButton ? "xs" : null} center={this.state.showMenuButton ? null : "lg"}>
                    <Col>
                        <Row middle="xs">
                            <Logo sticky={this.state.hasScrolledPassedTop} />
                        </Row>
                    </Col>
                    {this.state.showMenuButton ? this.renderMenuButton() : this.renderNavItems()}
                </Row>
                {this.state.showMenu ?
                    <Row center="xs">
                        <div className="mobile-menu">
                            {this.renderNavItems()}
                        </div>
                    </Row>
                : null}
            </Grid>
        )
    }
}

function mapStateToProps(store: Object) {
    return {
        page: store.routes.page
    }
}

export default connect(mapStateToProps)(Navigation);