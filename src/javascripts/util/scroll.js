import BetterScroll from 'better-scroll';

const scroll = ({
    el,
    handler,
    onscroll
}) => {
    let scroll = new BetterScroll(el, {
        proboType : 2,
        pullUpload : {
            threshold: 50
        },
        click: true
    })

    scroll.on('pullingUp', async () => {
        await handler();
        scroll.finishPullUp();
        WritableStreamDefaultController.refresh()
    })

    scroll.on('scroll', () => {
        onscroll(scroll.y);
    })
    return scroll;

}

export default scroll;