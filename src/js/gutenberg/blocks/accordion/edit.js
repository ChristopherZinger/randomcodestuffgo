const { InnerBlocks } = wp.blockEditor

const TEMPLATE = [
    ['core/columns', { className: 'accordion__header' }],
    ['core/group', { className: 'accordion__content' }, [['rc/accordion-content']]],
]

export default () => {
    return (
        <div className='accordion'>
            <InnerBlocks template={TEMPLATE} templateLock='all' />
        </div>
    )
}
