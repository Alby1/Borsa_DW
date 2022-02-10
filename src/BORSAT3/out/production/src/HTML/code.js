st = `[{"date":"2021-12-31T00:00:00+0000","symbol":"AAPL","volume":64062262,"high":179.23,"low":177.26,"exchange":"XNAS","close":177.57,"open":178.085},{"date":"2021-12-30T00:00:00+0000","volume":59619100,"high":180.57,"low":178.09,"close":178.2,"open":179.47},{"date":"2021-12-29T00:00:00+0000","volume":62231200,"high":180.63,"low":178.14,"close":179.38,"open":179.33},{"date":"2021-12-28T00:00:00+0000","volume":76421728,"high":181.33,"low":178.53,"close":179.29,"open":180.16},{"date":"2021-12-27T00:00:00+0000","volume":73006629,"high":180.42,"low":177.07,"close":180.33,"open":177.085},{"date":"2021-12-23T00:00:00+0000","volume":68227500,"high":176.85,"low":175.27,"close":176.28,"open":175.85},{"date":"2021-12-22T00:00:00+0000","volume":92004100,"high":175.86,"low":172.15,"close":175.64,"open":173.04},{"date":"2021-12-21T00:00:00+0000","volume":85845000,"high":173.2,"low":169.12,"close":172.99,"open":171.56},{"date":"2021-12-20T00:00:00+0000","volume":107313400,"high":170.58,"low":167.46,"close":169.75,"open":168.28},{"date":"2021-12-17T00:00:00+0000","volume":195432700,"high":173.47,"low":169.69,"close":171.14,"open":169.93},{"date":"2021-12-16T00:00:00+0000","volume":149964200,"high":181.14,"low":170.75,"close":172.26,"open":179.28},{"date":"2021-12-15T00:00:00+0000","volume":130687600,"high":179.5,"low":172.31,"close":179.3,"open":175.11},{"date":"2021-12-14T00:00:00+0000","volume":139285700,"high":177.74,"low":172.21,"close":174.33,"open":175.25},{"date":"2021-12-13T00:00:00+0000","volume":151103753,"high":182.09,"low":175.53,"close":175.74,"open":181.115},{"date":"2021-12-10T00:00:00+0000","volume":110986702,"high":179.63,"low":174.69,"close":179.45,"open":175.205},{"date":"2021-12-09T00:00:00+0000","volume":107976382,"high":176.75,"low":173.92,"close":174.56,"open":174.91},{"date":"2021-12-08T00:00:00+0000","volume":116998851,"high":175.95,"low":170.7,"close":175.08,"open":172.125},{"date":"2021-12-07T00:00:00+0000","volume":117482381,"high":171.58,"low":168.34,"close":171.18,"open":169.08},{"date":"2021-12-06T00:00:00+0000","volume":107496982,"high":167.8799,"low":164.28,"close":165.32,"open":164.29},{"date":"2021-12-03T00:00:00+0000","volume":117938300,"high":164.96,"low":159.72,"close":161.84,"open":164.02},{"date":"2021-12-02T00:00:00+0000","volume":136474900,"high":164.2,"low":157.8,"close":163.76,"open":158.74},{"date":"2021-12-01T00:00:00+0000","volume":145135682,"high":170.295,"low":164.53,"close":164.77,"open":167.48}]`

/* STOCK_NAME='Netflix, Inc.'
STOCK_ADDRESS='100 Winchester Cir, Los Gatos, California, United States'
STOCK_DESCRIPTION='Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films and television series through distribution deals as well as its own productions, known as Netflix Originals.' */
STOCK_NAME='TORRY'
STOCK_ADDRESS='Via Nino Tavoni, 12/3, 41058 Vignola MO'
STOCK_DESCRIPTION='Questo progetto è stato reso possibile da: Ospedale psichiatrico Il Gelso.'

/* var upward = "rgb(17,149,8)"
var downward = "rgb(202, 29, 33)" */
firstDate = ""
lastDate = ""
earnedInTimePeriod = 0

function STDs(){

    /* st = GetURLParameter("st")
    st = st.replaceAll("%22", '"') */
    st = JSON.parse(st)

    st = st.reverse()

    date = new Date(st[0].date)
    firstDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
    date = new Date(st[st.length-1].date)
    lastDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`

    earnedInTimePeriod = (st[st.length-1].close - st[0].close).toFixed(2)

    console.log(st)

    mainInfo()
    mainChart()
    theOtherChart()
}

function marqData(string){
    marqDa = document.getElementById("marqData")

    if(marqDa.innerHTML != ""){
        marqDa.innerHTML += " -.- "
    }
    marqDa.innerHTML += string
}

function mainInfo(){
    document.getElementById("title").innerHTML = STOCK_NAME
    document.getElementById("code").innerHTML = st[st.length - 1].symbol
    document.getElementById("exchange").innerHTML = st[st.length - 1].exchange
    document.getElementById("address").innerHTML = STOCK_ADDRESS
    document.getElementById("description").innerHTML = STOCK_DESCRIPTION
    marqData(`Last close: ${(st[st.length - 1].close).toFixed(2)}$`)

    repeat = true
    budget = 1
    while(repeat){
        budget *= 10
        maxHypo = maxHypotheticalHighAndSellRevenue(budget)
        if(maxHypo != budget) repeat = false
    }
    document.getElementById("maxHypo").innerHTML = `If you had marketed ${budget}$ you would have ${maxHypo}$ now.`


    if(earnedInTimePeriod >= 0){
        document.getElementById("earned").innerHTML = `In the time span the company has earned: ${earnedInTimePeriod}$.`
    } else document.getElementById("earned").innerHTML = `In the time span the company has lost: ${-earnedInTimePeriod}$.`

    document.getElementById("raiseDays").innerHTML = `The stock has risen ${raiseDaysPercentage()}% of the days in the time span.`
}

function maxHypotheticalHighAndSellRevenue(budget){
    yesterday = st[0].close
    stocks = 0
    higher = 0
    for (let i = 1; i < st.length; i++) {
        today = st[i].close
        if(today > yesterday || st.length - i < 2){
            if(stocks > 0 || st.length - i < 5){
                sellableAmount = 1
                if(higher > 0 || st.length - i < 5){
                    sellableAmount = stocks
                }
                budget += today * sellableAmount
                stocks -= sellableAmount
            }
            higher = 1
        } else if(today < yesterday){
            if(budget >= today && !st.length - i < 10){
                buyableAmount = 1
                if(higher < 0){
                    buyableAmount = Math.floor(budget / today)
                }
                budget -= today * buyableAmount
                stocks += buyableAmount
            }
            higher = -1
        } else {
            if(higher > 0 && stocks >= 0){
                budget += today
            } else if(higher < 0 && budget >= today){
                budget -= today
                stocks += 1
            }
        }

        yesterday = today
    }
    return (budget).toFixed(2)
}

function raiseDaysPercentage(){
    daysPassed = 0
    daysRaised = 0
    yesterday = st[0].close
    for (let i = 1; i < st.length; i++) {
        today = st[i].close
        if(today > yesterday) {
            daysRaised += 1
        }
        daysPassed += 1
        yesterday = today
    }
    return (daysRaised / daysPassed).toFixed(3)
}

function mainChart(){
    const ctx = document.getElementById('main-chart')

    closes = []
    opens = []
    highs = []
    lows = []
    labels = []
    max = st[0].close
    min = st[0].close

    for (let i = 0; i < st.length; i++) {
        if(max < st[i].close) max = st[i].close
        if(min > st[i].close) min = st[i].close
        closes[i] = st[i].close
        opens[i] = st[i].open
        highs[i] = st[i].high
        lows[i] = st[i].low
        date = new Date(st[i].date)
        labels[i] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
    marqData(`MAX in time: ${max.toFixed(2)}$`)
    marqData(`MIN in time: ${min.toFixed(2)}$`)

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Close',
                data: closes,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },{
                label: 'Open',
                data: opens,
                fill: false,
                borderColor: 'rgb(95, 70, 192)',
                tension: 0.1
            },{
                label: 'High',
                data: highs,
                fill: false,
                borderColor: 'rgb(14, 205, 14)',
                tension: 0.1
            },{
                label: 'Low',
                data: lows,
                fill: false,
                borderColor: 'rgb(220, 40, 70)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'whitesmoke'
                    }
                },
                y: {
                    ticks: {
                        color: 'whitesmoke'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'whitesmoke'
                    }
                }
            }
        }
    })
}

function theOtherChart(){
    const ctx = document.getElementById('the-other-chart')
    labels = []
    data = []
    MCVs = []

    MCVs[0] = new MCV(st[0].close, 1)

    for (let i = 1; i < st.length; i++){
        done = false
        for (let j = 0; j < MCVs.length; j++) {
            if(MCVs[j].value == st[i].close && !done){
                MCVs[j].repetitions += 1;
                done = true
            }

            if(j == MCVs.length - 1 && !done){
                MCVs[MCVs.length] = new MCV(st[i].close, 0)
            }
        }

    }

    for (let i = 0; i < MCVs.length; i++) {
        data[i] = MCVs[i].repetitions
        labels[i] = MCVs[i].value
    }

    console.log(MCVs)

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Most Common Values',
                data: data,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(55, 172, 172)',
                borderWidth: 2,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'whitesmoke'
                    }
                },
                y: {
                    ticks: {
                        color: 'whitesmoke'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'whitesmoke'
                    }
                }
            }
        }
    })
}

class MCV{
    constructor(value, repetitions){
        this.value = value
        this.repetitions = repetitions
    }
}

function saveAsImage(main){
    link = document.createElement('a')
    if(main){
        link.download = `${STOCK_NAME} from ${firstDate} to ${lastDate}.png`
        chart = document.getElementById('main-chart')
    } else {
        link.download = `MCV in ${STOCK_NAME} from ${firstDate} to ${lastDate}.png`
        chart = document.getElementById('the-other-chart')
    }
    link.href = chart.toDataURL()
    link.click()
    link.delete
}

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1)
    var sURLVariables = sPageURL.split('&')
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=')
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1]
        }
    }
}
