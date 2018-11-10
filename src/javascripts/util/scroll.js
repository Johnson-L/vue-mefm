import BetterScroll from 'better-scroll';

const scroll = ({
    el,
    handler,
    onscroll
}) => {
    let scroll = new BetterScroll(el, {
        probeType : 2,
        pullUpLoad: { //配置上拉加载
            threshold: 50 // 距离底部多少距离
        },
        click: true
    })
   

    scroll.on('pullingUp',  async () => {
        console.log('满足上拉刷新条件')
        await handler();
        scroll.finishPullUp() // 解决拉动刷新
        scroll.refresh() // 重新计算
    })

    scroll.on('scroll', () => {
        
        // console.log(scroll.y)
        onscroll(scroll.y);
    })
    return scroll;

}

export default scroll;