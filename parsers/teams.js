exports.parseFranchiseTable = (tr) => ({
    team_name: tr.eq(0).text(),
    league: tr.eq(1).text(), 
    from: parseInt(tr.eq(2).text().substring(0,4)), 
    to: parseInt(tr.eq(3).text().substring(0,4)),
    years: parseInt(tr.eq(4).text()),
    games: parseInt(tr.eq(5).text()),
    wins: parseInt(tr.eq(6).text()),
    losses: parseInt(tr.eq(7).text()),
    win_loss_pct: parseFloat(tr.eq(8).text()),
    playoffs: parseInt(tr.eq(9).text()),
    div_chamiponships: parseInt(tr.eq(10).text()),
    conf_championships: parseInt(tr.eq(11).text()),
    championships: parseInt(tr.eq(12).text())
})