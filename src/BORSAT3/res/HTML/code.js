st = `[{"date":"2021-12-31T00:00:00+0000","symbol":"AAPL","volume":64062262,"high":179.23,"low":177.26,"exchange":"XNAS","close":177.57,"open":178.085},{"date":"2021-12-30T00:00:00+0000","volume":59619100,"high":180.57,"low":178.09,"close":178.2,"open":179.47},{"date":"2021-12-29T00:00:00+0000","volume":62231200,"high":180.63,"low":178.14,"close":179.38,"open":179.33},{"date":"2021-12-28T00:00:00+0000","volume":76421728,"high":181.33,"low":178.53,"close":179.29,"open":180.16},{"date":"2021-12-27T00:00:00+0000","volume":73006629,"high":180.42,"low":177.07,"close":180.33,"open":177.085},{"date":"2021-12-23T00:00:00+0000","volume":68227500,"high":176.85,"low":175.27,"close":176.28,"open":175.85},{"date":"2021-12-22T00:00:00+0000","volume":92004100,"high":175.86,"low":172.15,"close":175.64,"open":173.04},{"date":"2021-12-21T00:00:00+0000","volume":85845000,"high":173.2,"low":169.12,"close":172.99,"open":171.56},{"date":"2021-12-20T00:00:00+0000","volume":107313400,"high":170.58,"low":167.46,"close":169.75,"open":168.28},{"date":"2021-12-17T00:00:00+0000","volume":195432700,"high":173.47,"low":169.69,"close":171.14,"open":169.93},{"date":"2021-12-16T00:00:00+0000","volume":149964200,"high":181.14,"low":170.75,"close":172.26,"open":179.28},{"date":"2021-12-15T00:00:00+0000","volume":130687600,"high":179.5,"low":172.31,"close":179.3,"open":175.11},{"date":"2021-12-14T00:00:00+0000","volume":139285700,"high":177.74,"low":172.21,"close":174.33,"open":175.25},{"date":"2021-12-13T00:00:00+0000","volume":151103753,"high":182.09,"low":175.53,"close":175.74,"open":181.115},{"date":"2021-12-10T00:00:00+0000","volume":110986702,"high":179.63,"low":174.69,"close":179.45,"open":175.205},{"date":"2021-12-09T00:00:00+0000","volume":107976382,"high":176.75,"low":173.92,"close":174.56,"open":174.91},{"date":"2021-12-08T00:00:00+0000","volume":116998851,"high":175.95,"low":170.7,"close":175.08,"open":172.125},{"date":"2021-12-07T00:00:00+0000","volume":117482381,"high":171.58,"low":168.34,"close":171.18,"open":169.08},{"date":"2021-12-06T00:00:00+0000","volume":107496982,"high":167.8799,"low":164.28,"close":165.32,"open":164.29},{"date":"2021-12-03T00:00:00+0000","volume":117938300,"high":164.96,"low":159.72,"close":161.84,"open":164.02},{"date":"2021-12-02T00:00:00+0000","volume":136474900,"high":164.2,"low":157.8,"close":163.76,"open":158.74},{"date":"2021-12-01T00:00:00+0000","volume":145135682,"high":170.295,"low":164.53,"close":164.77,"open":167.48}]`
dynamicImg = "https://g.foolcdn.com/art/companylogos/square/aapl.png"



/* stock_address='100 Winchester Cir, Los Gatos, California, United States'
stock_description='Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films and television series through distribution deals as well as its own productions, known as Netflix Originals.' */
stock_name = ""
stock_address = 'Via Nino Tavoni, 12/3, 41058 Vignola MO'
stock_description = 'Questo progetto è stato reso possibile da: Ospedale psichiatrico Il Gelso.'

/* var upward = "rgb(17,149,8)"
var downward = "rgb(202, 29, 33)" */
firstDate = ""
lastDate = ""
earnedInTimePeriod = 0
    /**
     * The main function, gets called when the page is loaded.
     */
function STDs() {

    /* st = GetURLParameter("st")
    st = st.replaceAll("%22", '"') */
    st = JSON.parse(st)

    st = st.reverse()

    date = new Date(st[0].date)
    firstDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    date = new Date(st[st.length - 1].date)
    lastDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    earnedInTimePeriod = (st[st.length - 1].close - st[0].close).toFixed(2)

    console.log(st)

    mainInfo()
    mainChart()
    theOtherChart()
}

/**
 * Puts together a string to put in the top moving text (revoked).
 * @param string string to add.
 */
function marqData(string) {
    marqDa = document.getElementById("marqData")

    if (marqDa.innerHTML != "") {
        marqDa.innerHTML += " · "
    }
    marqDa.innerHTML += string
}

/**
 * Modifies the main text elements in the HTML to insert the main data (non calculated).
 */
function mainInfo() {
    stock_name = st[st.length - 1].symbol
    document.getElementById("title").innerHTML = stock_name
    document.getElementById("exchange").innerHTML = st[st.length - 1].exchange
    document.getElementById("address").innerHTML = stock_address
    document.getElementById("description").innerHTML = stock_description
    marqData(`Last close: ${(st[st.length - 1].close).toFixed(2)}$`)

    document.getElementById("maxHypo").innerHTML = `Max theoric realizable: ${maxHypotheticalHighAndSellRevenue()}$.`


    if (earnedInTimePeriod >= 0) {
        document.getElementById("earned").innerHTML = `In the time span the company has earned: ${earnedInTimePeriod}$.`
    } else document.getElementById("earned").innerHTML = `In the time span the company has lost: ${-earnedInTimePeriod}$.`

    document.getElementById("raiseDays").innerHTML = `The stock has risen ${raiseDaysPercentage()}% of the days in the time span.`

    document.getElementById("immagine").src = dynamicImg
}

/**
 * Calculates the maximum hypotetical income from selling at highest and buying at lowest everyday.
 * @returns The calculated value.
 */
function maxHypotheticalHighAndSellRevenue() {
    sum = 0;
    for (let i = 0; i < st.length; i++) {
        sum += st[i].high - st[i].low
    }
    return sum.toFixed(2)
}

/**
 * Calculates the percentage of days the stock went up.
 * @returns The percentage.
 */
function raiseDaysPercentage() {
    daysPassed = 0
    daysRaised = 0
    yesterday = st[0].close
    for (let i = 1; i < st.length; i++) {
        today = st[i].close
        if (today > yesterday) {
            daysRaised += 1
        }
        daysPassed += 1
        yesterday = today
    }
    return ((daysRaised / daysPassed) * 100).toFixed(3)
}

/**
 * Puts together the main chart.
 */
function mainChart() {
    const ctx = document.getElementById('main-chart')

    closes = []
    opens = []
    highs = []
    lows = []
    labels = []
    max = st[0].close
    min = st[0].close

    for (let i = 0; i < st.length; i++) {
        if (max < st[i].close) max = st[i].close
        if (min > st[i].close) min = st[i].close
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
            }, {
                label: 'Open',
                data: opens,
                fill: false,
                borderColor: 'rgb(95, 70, 192)',
                tension: 0.1
            }, {
                label: 'High',
                data: highs,
                fill: false,
                borderColor: 'rgb(14, 205, 14)',
                tension: 0.1
            }, {
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

/**
 * Puts together the secondary chart.
 */
function theOtherChart() {
    const ctx = document.getElementById('the-other-chart')
    labels = []
    data = []
    MCVs = []

    MCVs[0] = new MCV(st[0].close, 1)

    for (let i = 1; i < st.length; i++) {
        done = false
        for (let j = 0; j < MCVs.length; j++) {
            if (MCVs[j].value == st[i].close && !done) {
                MCVs[j].repetitions += 1;
                done = true
            }

            if (j == MCVs.length - 1 && !done) {
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

/**
 * A class to make the counting of Most Common Values easier.
 */
class MCV {
    /**
     * 
     * @param value A value.
     * @param repetitions The number of times it occured.
     */
    constructor(value, repetitions) {
        this.value = value
        this.repetitions = repetitions
    }
}

/**
 * Saves a chart as image on client's device.
 * @param main If it has to refer to the main chart.
 */
function saveAsImage(main) {
    link = document.createElement('a')
    if (main) {
        link.download = `${stock_name} from ${firstDate} to ${lastDate}.png`
        chart = document.getElementById('main-chart')
    } else {
        link.download = `MCV in ${stock_name} from ${firstDate} to ${lastDate}.png`
        chart = document.getElementById('the-other-chart')
    }
    link.href = chart.toDataURL()
    link.click()
    link.delete
}

/**
 * Gets an URL param.
 * @param sParam The URL param name.
 * @returns The param.
 */
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1)
    var sURLVariables = sPageURL.split('&')
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=')
        if (sParameterName[0] == sParam) {
            return sParameterName[1]
        }
    }
}