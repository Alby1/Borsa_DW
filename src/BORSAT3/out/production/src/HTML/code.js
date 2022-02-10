st = `test string (to not waste API quota)`
dynamicImg = "https://g.foolcdn.com/art/companylogos/square/aapl.png"



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
        marqDa.innerHTML += " · "
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

    document.getElementById("maxHypo").innerHTML = `Max theoric realizable: ${maxHypotheticalHighAndSellRevenue()}$.`


    if(earnedInTimePeriod >= 0){
        document.getElementById("earned").innerHTML = `In the time span the company has earned: ${earnedInTimePeriod}$.`
    } else document.getElementById("earned").innerHTML = `In the time span the company has lost: ${-earnedInTimePeriod}$.`

    document.getElementById("raiseDays").innerHTML = `The stock has risen ${raiseDaysPercentage()}% of the days in the time span.`

    document.getElementById("immagine").src = dynamicImg
}

function maxHypotheticalHighAndSellRevenue(){
    sum = 0;
    for (let i = 0; i < st.length; i++) {
        sum += st[i].high - st[i].low
    }
    return sum.toFixed(2)
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
