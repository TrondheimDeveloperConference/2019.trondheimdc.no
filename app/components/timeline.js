const data = [
    {
        month: 'Jan',
        events: []
    },
    {
        month: 'Feb',
        events: [{
            title: 'Call for speakers',
            date: 'February 12th',
            location: '10px',
            align: 'right'
        }]
    },
    {
        month: 'Mar',
        events: []
    },
    {
        month: 'Apr',
        events: []
    },
    {
        month: 'May',
        events: []
    },
    {
        month: 'Jun',
        events: [{
            title: 'Call for speakers closes',
            date: 'June 3rd',
            location: '-10px',
            align: 'left'
        }]
    },
    {
        month: 'Jul',
        events: []
    },
    {
        month: 'Aug',
        events: [{
            title: 'Accepted speakers notified',
            date: 'By The End middle of august',
            location: '15px',
            align: 'left'
        }]
    },
    {
        month: 'Sept',
        events: []
    },
    {
        month: 'Oct',
        events: [
            {
                title: 'Speakers dinner',
                date: 'October 27th',
                location: '45px',
                align: 'left'
            }, {
                title: 'Trondheim Developer Conference 2019!',
                date: 'October 28th',
                location: '75px',
                align: 'right'
            }, {
                title: 'Workshops!',
                date: 'October 29th',
                location: '105px',
                align: 'left'
            }
        ]
    }
];

export default () => (
    <div className='timeline'>
        <ul className='timeline__timeline'>
            {
                data.map((month, key) => (
                    <li key={key} className='timeline__month'>
                        <div className='timeline__month-name'>
                            {month.month.split('').map((letter, lk) => <div key={lk} className='timeline__month-letter'>{letter}</div>)}
                        </div>
                        {
                            month.events.map((event, ek) => (
                                <div className={`timeline__event timeline__event--${event.align}`} key={ek} style={{top: event.location}}>
                                    <div className='timeline__event-title'>
                                        {event.title}
                                    </div>
                                    <div className='timeline__event-date'>
                                        {event.date}
                                    </div>
                                </div>
                            ))
                        }
                    </li>
                ))
            }
        </ul>
    </div>
);
