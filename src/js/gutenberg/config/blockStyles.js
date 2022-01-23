const { __ } = wp.i18n

//
// Block styles to unregister

const gutenbergStylesToUnregister = [
    ['core/button', 'fill'],
    ['core/button', 'outline'],
    ['core/image', 'rounded'],
    ['core/pullquote', 'solid-color'],
    ['core/quote', 'large'],
    ['core/separator', 'dots'],
    ['core/separator', 'wide'],
    ['core/table', 'stripes'],
]

//
// Block styles to register

const gutenbergStylesToRegister = [
    [
        'core/button',
        {
            name: 'primary',
            label: __('Primary', 'rc'),
            isDefault: true,
        },
    ],
    [
        'core/button',
        {
            name: 'secondary',
            label: __('Secondary', 'rc'),
        },
    ],
    [
        'core/paragraph',
        {
            name: 'lead',
            label: __('Lead', 'rc'),
        },
    ],
    [
        'core/group',
        {
            name: 'xs',
            label: __('Extra Small Margin', 'rc'),
        },
    ],
    [
        'core/group',
        {
            name: 's',
            label: __('Small Margin', 'rc'),
        },
    ],
    [
        'core/group',
        {
            name: 'm',
            label: __('Medium Margin', 'rc'),
        },
    ],
    [
        'core/group',
        {
            name: 'l',
            label: __('Large Margin', 'rc'),
        },
    ],
    [
        'core/group',
        {
            name: 'xl',
            label: __('Extra Large Margin', 'rc'),
        },
    ],
    [
        'core/columns',
        {
            name: 'no-margins',
            label: __('No Margin', 'rc'),
        },
    ],
]

//
// Init

export default () => {
    gutenbergStylesToRegister.forEach((style) => {
        wp.blocks.registerBlockStyle(style[0], style[1])
    })

    gutenbergStylesToUnregister.forEach((style) => {
        wp.blocks.unregisterBlockStyle(style[0], style[1])
    })
}
