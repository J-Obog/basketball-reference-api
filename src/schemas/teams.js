exports.franchiseTbl = (r) => ({
    team_name: r.eq(0).text(),
    league: r.eq(1).text(), 
    from: parseInt(r.eq(2).text().substring(0,4)), 
    to: parseInt(r.eq(3).text().substring(0,4)),
    years: parseInt(r.eq(4).text()),
    games: parseInt(r.eq(5).text()),
    wins: parseInt(r.eq(6).text()),
    losses: parseInt(r.eq(7).text()),
    win_loss_pct: parseFloat(r.eq(8).text()),
    playoffs: parseInt(r.eq(9).text()),
    div_chamiponships: parseInt(r.eq(10).text()),
    conf_championships: parseInt(r.eq(11).text()),
    championships: parseInt(r.eq(12).text())
})