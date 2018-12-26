import React from 'react';
import index from './pages/Index/Index.js';
import partners from './pages/Partners/Partners.js';
import startups from './pages/Partners/Startups';
import notFound from './pages/NotFound/NotFound.js';
import speakers from './pages/Speakers/Speakers.js';
import speakerinfo from './pages/speakerinfo';
import workshops from './pages/Workshops/Workshops.js';
import monetaryPolicy from './pages/monetary-policy';
import tipsAndTricks from './pages/tips-and-tricks';
import tickets from './pages/Tickets/Tickets.js';
import program from './pages/Program/Program.js';
import programDetails from './pages/Program/ProgramDetails.js';
import { store } from './store';
import info from './pages/Info/Info.js';

const routes = compile({
    '/partners': partners,
    '/startups': startups,
    '/speakers': speakers,
    '/workshops': workshops,
    '/speakers/monetary-policy': monetaryPolicy,
    '/speakers/tips': tipsAndTricks,
    '/speakers/info': speakerinfo,
    '/tickets': tickets,
    '/info': info,
    '/program': program,
    '/program/([a-zA-Z0-9_-]+)': programDetails,
    '/': index
});

function compile(routes) {
    const compiled = [];
    Object.keys(routes).forEach(route => {
        compiled.push({
            pattern: new RegExp(`^${route.replace(/\//g, '\\/')}$`),
            page: routes[route]
        });
    });
    return compiled;
}

function dispatchPage(pathname) {
    store.dispatch({
        type: 'ROUTER_NAVIGATE',
        value: pathname
    });
}

window.onpopstate = function(ev) {
    const url = window.location.pathname;
    dispatchPage(url);
};

function navigate(ev) {
    const url = ev.target.getAttribute('data-url');
    if (!url) {
        return true;
    }


    window.history.pushState(null, null, url);
    dispatchPage(url);
    ev.preventDefault();
    return false;
}

export function getPage(requestedPage) {
    if (requestedPage[requestedPage.length - 1] === '/' && requestedPage.length > 1) {
        requestedPage = requestedPage.substring(0, requestedPage.length - 1);
    }


    const page = routes.find((routes) => {
        return routes.pattern.test(requestedPage);
    });

    if (!page) {
        return notFound;
    }

    if (page && page.page.component) {
        if (page.page.action) {
            store.dispatch(page.page.action());
        }
        return page.page.component;
    } else {
        const match = requestedPage.match(page.pattern);
        if (match.length > 1) {
            return page.page(match[1]);
        } else {
            return page.page;
        }
    }
};

export function link(text, href) {
    return React.createElement('a', {href: href, 'data-url': href, onClick: navigate}, text);
}
