const whoWin = (p1Hand, p2Hand) => {
    // 0: 비김(draw), 1: p1 win, 2: p2 win
    let result;
    if (p1Hand != null && p2Hand != null) {
        result = (3 + p1Hand - p2Hand) % 3;
        // console.log(p1Hand, p2Hand, result);
    }
    return result;
}
export default whoWin;