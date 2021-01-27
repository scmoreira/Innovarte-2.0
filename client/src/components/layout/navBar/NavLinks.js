const isLoggedIn = false

const NavLinks = [
    {
        label: 'About',
        'aria-label': 'about',
        to: '/#about',
    },
    {
        label: 'How it works',
        'aria-label': 'how it works',
        to: '/#howItWorks',
    },
    {
        label: 'Artworks',
        'aria-label': 'artworks',
        to: '/artworks',
    },
    {
        label: 'Sign Up',
        'aria-label': 'sign up',
        to: '/signup',
        hidden: isLoggedIn ? true : false
    },
    {
        label: 'Log In',
        'aria-label': 'log in',
        to: '/login',
        hidden: isLoggedIn ? true : false
    },
    {
        label: 'My Profile',
        'aria-label': 'my profile',
        to: '/profile',
        hidden: isLoggedIn ? false : true
    }
]

export default NavLinks;
