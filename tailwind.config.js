const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json', './node_modules/flowbite/**/*.js'],
    theme: {
        fontFamily: {
            'display': 'var(--font-sans-heading)',
            'body': 'var(--font-sans-body)'
        },
        extend: {
            colors: {
                'primary': {
                    '100': 'rgb(var(--primary-100) / <alpha-value>)',
                    '400': 'rgb(var(--primary-400) / <alpha-value>)',
                    '600': 'rgb(var(--primary-600) / <alpha-value>)',
                    '800': 'rgb(var(--primary-800) / <alpha-value>)'
                },
                'secondary': {
                    '600': 'rgb(var(--secondary-600) / <alpha-value>)',
                },
                'text': {
                    '400': 'rgb(var(--text-400) / <alpha-value>)',
                    '600': 'rgb(var(--text-600) / <alpha-value>)',
                },
                'link': {
                    '600': 'rgb(var(--link-600) / <alpha-value>)',
                }
            },
            boxShadow: {
                'xl': '5px 5px 15px 0px rgba(51, 51, 51, 0.1)',
            },
            padding: {
                'spacer': 'var(--spacer)',
            },
            margin: {
                'spacer': 'var(--spacer)',
            },
            fontSize: {
                '14': ['0.875rem', '1.25rem'],
                '16': ['1rem', '1.5rem'],
                '18': ['1.125rem', '1.625rem'],
                '20': ['1.25rem', '1.75rem'],
                '24': ['1.5rem', '2rem'],
                '28': ['1.75rem', '2.25rem'],
                '32': ['2rem', '2.75rem']
            }
        }
    },
	plugins: [typography, require('flowbite/plugin')],
};
