STOCK_CODE='AAPL'
STOCK_EXCHANGE='NASDAQ'
STOCK_NAME='Apple Inc.'
STOCK_ADDRESS='daddy tim cook street'
STOCK_DESCRIPTION='Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.'




/* var upward = "rgb(17,149,8)"
var downward = "rgb(202, 29, 33)" */
firstDate = ""
lastDate = ""
earnedInTimePeriod = 0

st = `[ { "open": 171.68, "high": 174.1, "low": 170.68, "close": 172.39, "volume": 82391400.0, "adj_high": null, "adj_low": null, "adj_close": 172.39, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-02-04T00:00:00+0000" }, { "open": 174.48, "high": 176.2399, "low": 172.12, "close": 172.9, "volume": 87114127.0, "adj_high": null, "adj_low": null, "adj_close": 172.9, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-02-03T00:00:00+0000" }, { "open": 174.75, "high": 175.88, "low": 173.33, "close": 175.84, "volume": 79172100.0, "adj_high": null, "adj_low": null, "adj_close": 175.84, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-02-02T00:00:00+0000" }, { "open": 174.01, "high": 174.82, "low": 172.32, "close": 174.61, "volume": 82889520.0, "adj_high": null, "adj_low": null, "adj_close": 174.61, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-02-01T00:00:00+0000" }, { "open": 170.16, "high": 175.0, "low": 169.51, "close": 174.78, "volume": 115541590.0, "adj_high": null, "adj_low": null, "adj_close": 174.78, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-31T00:00:00+0000" }, { "open": 165.71, "high": 170.35, "low": 162.8, "close": 170.33, "volume": 179485800.0, "adj_high": null, "adj_low": null, "adj_close": 170.33, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-28T00:00:00+0000" }, { "open": 162.45, "high": 163.84, "low": 158.28, "close": 159.22, "volume": 108825865.0, "adj_high": null, "adj_low": null, "adj_close": 159.22, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-27T00:00:00+0000" }, { "open": 163.5, "high": 164.3894, "low": 157.82, "close": 159.69, "volume": 107707884.0, "adj_high": null, "adj_low": null, "adj_close": 159.69, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-26T00:00:00+0000" }, { "open": 158.98, "high": 162.76, "low": 157.02, "close": 159.78, "volume": 114972000.0, "adj_high": null, "adj_low": null, "adj_close": 159.78, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-25T00:00:00+0000" }, { "open": 160.02, "high": 162.3, "low": 154.7, "close": 161.62, "volume": 162241960.0, "adj_high": null, "adj_low": null, "adj_close": 161.62, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-24T00:00:00+0000" }, { "open": 164.42, "high": 166.33, "low": 162.3, "close": 162.41, "volume": 122501300.0, "adj_high": null, "adj_low": null, "adj_close": 162.41, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-21T00:00:00+0000" }, { "open": 166.98, "high": 169.64, "low": 164.23, "close": 164.51, "volume": 90211048.0, "adj_high": null, "adj_low": null, "adj_close": 164.51, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-20T00:00:00+0000" }, { "open": 170.0, "high": 171.08, "low": 165.94, "close": 166.23, "volume": 94473863.0, "adj_high": null, "adj_low": null, "adj_close": 166.23, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-19T00:00:00+0000" }, { "open": 171.51, "high": 172.53, "low": 169.41, "close": 169.8, "volume": 85540485.0, "adj_high": null, "adj_low": null, "adj_close": 169.8, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-18T00:00:00+0000" }, { "open": 171.34, "high": 173.78, "low": 171.09, "close": 173.07, "volume": 80355000.0, "adj_high": null, "adj_low": null, "adj_close": 173.07, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-14T00:00:00+0000" }, { "open": 175.78, "high": 176.62, "low": 171.79, "close": 172.19, "volume": 81572060.0, "adj_high": null, "adj_low": null, "adj_close": 172.19, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-13T00:00:00+0000" }, { "open": 176.12, "high": 177.179, "low": 174.821, "close": 175.53, "volume": 70577429.0, "adj_high": null, "adj_low": null, "adj_close": 175.53, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-12T00:00:00+0000" }, { "open": 172.32, "high": 175.18, "low": 170.82, "close": 175.08, "volume": 76015600.0, "adj_high": null, "adj_low": null, "adj_close": 175.08, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-11T00:00:00+0000" }, { "open": 169.08, "high": 172.5, "low": 168.17, "close": 172.19, "volume": 106606900.0, "adj_high": null, "adj_low": null, "adj_close": 172.19, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-10T00:00:00+0000" }, { "open": 172.89, "high": 174.14, "low": 171.03, "close": 172.17, "volume": 86580100.0, "adj_high": null, "adj_low": null, "adj_close": 172.17, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-07T00:00:00+0000" }, { "open": 172.7, "high": 175.3, "low": 171.64, "close": 172.0, "volume": 96751000.0, "adj_high": null, "adj_low": null, "adj_close": 172.0, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-06T00:00:00+0000" }, { "open": 179.61, "high": 180.17, "low": 174.64, "close": 174.92, "volume": 94218700.0, "adj_high": null, "adj_low": null, "adj_close": 174.92, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-05T00:00:00+0000" }, { "open": 182.63, "high": 182.9, "low": 179.12, "close": 179.7, "volume": 99310448.0, "adj_high": null, "adj_low": null, "adj_close": 179.7, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-04T00:00:00+0000" }, { "open": 177.83, "high": 182.88, "low": 177.71, "close": 182.01, "volume": 104487900.0, "adj_high": null, "adj_low": null, "adj_close": 182.01, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2022-01-03T00:00:00+0000" }, { "open": 178.085, "high": 179.23, "low": 177.26, "close": 177.57, "volume": 64062262.0, "adj_high": null, "adj_low": null, "adj_close": 177.57, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-31T00:00:00+0000" }, { "open": 179.47, "high": 180.57, "low": 178.09, "close": 178.2, "volume": 59619100.0, "adj_high": null, "adj_low": null, "adj_close": 178.2, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-30T00:00:00+0000" }, { "open": 179.33, "high": 180.63, "low": 178.14, "close": 179.38, "volume": 62231200.0, "adj_high": null, "adj_low": null, "adj_close": 179.38, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-29T00:00:00+0000" }, { "open": 180.16, "high": 181.33, "low": 178.53, "close": 179.29, "volume": 76421728.0, "adj_high": null, "adj_low": null, "adj_close": 179.29, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-28T00:00:00+0000" }, { "open": 177.085, "high": 180.42, "low": 177.07, "close": 180.33, "volume": 73006629.0, "adj_high": null, "adj_low": null, "adj_close": 180.33, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-27T00:00:00+0000" }, { "open": 175.85, "high": 176.85, "low": 175.27, "close": 176.28, "volume": 68227500.0, "adj_high": null, "adj_low": null, "adj_close": 176.28, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-23T00:00:00+0000" }, { "open": 173.04, "high": 175.86, "low": 172.15, "close": 175.64, "volume": 92004100.0, "adj_high": null, "adj_low": null, "adj_close": 175.64, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-22T00:00:00+0000" }, { "open": 171.56, "high": 173.2, "low": 169.12, "close": 172.99, "volume": 85845000.0, "adj_high": null, "adj_low": null, "adj_close": 172.99, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-21T00:00:00+0000" }, { "open": 168.28, "high": 170.58, "low": 167.46, "close": 169.75, "volume": 107313400.0, "adj_high": null, "adj_low": null, "adj_close": 169.75, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-20T00:00:00+0000" }`
st += `,{ "open": 169.93, "high": 173.47, "low": 169.69, "close": 171.14, "volume": 195432700.0, "adj_high": null, "adj_low": null, "adj_close": 171.14, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-17T00:00:00+0000" }, { "open": 179.28, "high": 181.14, "low": 170.75, "close": 172.26, "volume": 149964200.0, "adj_high": null, "adj_low": null, "adj_close": 172.26, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-16T00:00:00+0000" }, { "open": 175.11, "high": 179.5, "low": 172.31, "close": 179.3, "volume": 130687600.0, "adj_high": null, "adj_low": null, "adj_close": 179.3, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-15T00:00:00+0000" }, { "open": 175.25, "high": 177.74, "low": 172.21, "close": 174.33, "volume": 139285700.0, "adj_high": null, "adj_low": null, "adj_close": 174.33, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-14T00:00:00+0000" }, { "open": 181.115, "high": 182.09, "low": 175.53, "close": 175.74, "volume": 151103753.0, "adj_high": null, "adj_low": null, "adj_close": 175.74, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-13T00:00:00+0000" }, { "open": 175.205, "high": 179.63, "low": 174.69, "close": 179.45, "volume": 110986702.0, "adj_high": null, "adj_low": null, "adj_close": 179.45, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-10T00:00:00+0000" }, { "open": 174.91, "high": 176.75, "low": 173.92, "close": 174.56, "volume": 107976382.0, "adj_high": null, "adj_low": null, "adj_close": 174.56, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-09T00:00:00+0000" }, { "open": 172.125, "high": 175.95, "low": 170.7, "close": 175.08, "volume": 116998851.0, "adj_high": null, "adj_low": null, "adj_close": 175.08, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-08T00:00:00+0000" }, { "open": 169.08, "high": 171.58, "low": 168.34, "close": 171.18, "volume": 117482381.0, "adj_high": null, "adj_low": null, "adj_close": 171.18, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-07T00:00:00+0000" }, { "open": 164.29, "high": 167.8799, "low": 164.28, "close": 165.32, "volume": 107496982.0, "adj_high": null, "adj_low": null, "adj_close": 165.32, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-06T00:00:00+0000" }, { "open": 164.02, "high": 164.96, "low": 159.72, "close": 161.84, "volume": 117938300.0, "adj_high": null, "adj_low": null, "adj_close": 161.84, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-03T00:00:00+0000" }, { "open": 158.74, "high": 164.2, "low": 157.8, "close": 163.76, "volume": 136474900.0, "adj_high": null, "adj_low": null, "adj_close": 163.76, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-02T00:00:00+0000" }, { "open": 167.48, "high": 170.295, "low": 164.53, "close": 164.77, "volume": 145135682.0, "adj_high": null, "adj_low": null, "adj_close": 164.77, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-12-01T00:00:00+0000" }, { "open": 159.99, "high": 165.52, "low": 159.92, "close": 165.3, "volume": 173758500.0, "adj_high": null, "adj_low": null, "adj_close": 165.3, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-30T00:00:00+0000" }, { "open": 159.37, "high": 161.19, "low": 158.7901, "close": 160.24, "volume": 88748217.0, "adj_high": null, "adj_low": null, "adj_close": 160.24, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-29T00:00:00+0000" }, { "open": 159.57, "high": 160.45, "low": 156.36, "close": 156.81, "volume": 76959800.0, "adj_high": null, "adj_low": null, "adj_close": 156.81, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-26T00:00:00+0000" }, { "open": 160.75, "high": 162.14, "low": 159.64, "close": 161.94, "volume": 69342151.0, "adj_high": null, "adj_low": null, "adj_close": 161.94, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-24T00:00:00+0000" }, { "open": 161.12, "high": 161.8, "low": 159.07, "close": 161.41, "volume": 96041899.0, "adj_high": null, "adj_low": null, "adj_close": 161.41, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-23T00:00:00+0000" }, { "open": 161.68, "high": 165.7, "low": 161.0, "close": 161.02, "volume": 117467889.0, "adj_high": null, "adj_low": null, "adj_close": 161.02, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-22T00:00:00+0000" }, { "open": 157.65, "high": 161.02, "low": 156.53, "close": 160.55, "volume": 117147500.0, "adj_high": null, "adj_low": null, "adj_close": 160.55, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-19T00:00:00+0000" }, { "open": 153.71, "high": 158.67, "low": 153.05, "close": 157.87, "volume": 137659100.0, "adj_high": null, "adj_low": null, "adj_close": 157.87, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-18T00:00:00+0000" }, { "open": 150.995, "high": 155.0, "low": 150.995, "close": 153.49, "volume": 88807000.0, "adj_high": null, "adj_low": null, "adj_close": 153.49, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-17T00:00:00+0000" }, { "open": 149.94, "high": 151.49, "low": 149.34, "close": 151.0, "volume": 59047800.0, "adj_high": null, "adj_low": null, "adj_close": 151.0, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-16T00:00:00+0000" }, { "open": 150.37, "high": 151.88, "low": 149.43, "close": 150.0, "volume": 59077700.0, "adj_high": null, "adj_low": null, "adj_close": 150.0, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-15T00:00:00+0000" }, { "open": 148.43, "high": 150.4, "low": 147.48, "close": 149.99, "volume": 63632600.0, "adj_high": null, "adj_low": null, "adj_close": 149.99, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-12T00:00:00+0000" }, { "open": 148.96, "high": 149.43, "low": 147.68, "close": 147.87, "volume": 40788000.0, "adj_high": null, "adj_low": null, "adj_close": 147.87, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-11T00:00:00+0000" }, { "open": 150.02, "high": 150.1297, "low": 147.85, "close": 147.92, "volume": 65187092.0, "adj_high": null, "adj_low": null, "adj_close": 147.92, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-10T00:00:00+0000" }, { "open": 150.2, "high": 151.428, "low": 150.07, "close": 150.81, "volume": 52994252.0, "adj_high": null, "adj_low": null, "adj_close": 150.81, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-09T00:00:00+0000" }, { "open": 151.41, "high": 151.55, "low": 150.16, "close": 150.44, "volume": 54773446.0, "adj_high": null, "adj_low": null, "adj_close": 150.44, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-08T00:00:00+0000" }, { "open": 151.89, "high": 152.2, "low": 150.06, "close": 151.28, "volume": 65414600.0, "adj_high": null, "adj_low": null, "adj_close": 151.28, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-05T00:00:00+0000" }, { "open": 151.58, "high": 152.43, "low": 150.64, "close": 150.96, "volume": 60278200.0, "adj_high": null, "adj_low": null, "adj_close": 150.96, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-04T00:00:00+0000" }`
st += `, { "open": 150.39, "high": 151.97, "low": 149.83, "close": 151.49, "volume": 51035964.0, "adj_high": null, "adj_low": null, "adj_close": 151.49, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-03T00:00:00+0000" }, { "open": 148.66, "high": 151.57, "low": 148.65, "close": 150.02, "volume": 69064800.0, "adj_high": null, "adj_low": null, "adj_close": 150.02, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-02T00:00:00+0000" }, { "open": 148.985, "high": 149.7, "low": 147.8, "close": 148.96, "volume": 74588258.0, "adj_high": null, "adj_low": null, "adj_close": 148.96, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-11-01T00:00:00+0000" }, { "open": 147.22, "high": 149.94, "low": 146.41, "close": 149.8, "volume": 124850400.0, "adj_high": null, "adj_low": null, "adj_close": 149.8, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-29T00:00:00+0000" }, { "open": 149.82, "high": 153.165, "low": 149.72, "close": 152.57, "volume": 100077888.0, "adj_high": null, "adj_low": null, "adj_close": 152.57, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-28T00:00:00+0000" }, { "open": 149.36, "high": 149.73, "low": 148.49, "close": 148.85, "volume": 51361252.0, "adj_high": null, "adj_low": null, "adj_close": 148.85, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-27T00:00:00+0000" }, { "open": 149.33, "high": 150.84, "low": 149.01, "close": 149.32, "volume": 60811700.0, "adj_high": null, "adj_low": null, "adj_close": 149.32, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-26T00:00:00+0000" }, { "open": 148.68, "high": 149.37, "low": 147.6211, "close": 148.64, "volume": 50720561.0, "adj_high": null, "adj_low": null, "adj_close": 148.64, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-25T00:00:00+0000" }, { "open": 149.69, "high": 150.18, "low": 148.64, "close": 148.69, "volume": 58839600.0, "adj_high": null, "adj_low": null, "adj_close": 148.69, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-22T00:00:00+0000" }, { "open": 148.81, "high": 149.64, "low": 147.87, "close": 149.48, "volume": 61314200.0, "adj_high": null, "adj_low": null, "adj_close": 149.48, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-21T00:00:00+0000" }, { "open": 148.7, "high": 149.7522, "low": 148.12, "close": 149.26, "volume": 58418788.0, "adj_high": null, "adj_low": null, "adj_close": 149.26, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-20T00:00:00+0000" }, { "open": 147.01, "high": 149.17, "low": 146.55, "close": 148.76, "volume": 76248300.0, "adj_high": null, "adj_low": null, "adj_close": 148.76, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-19T00:00:00+0000" }, { "open": 143.445, "high": 146.84, "low": 143.16, "close": 146.55, "volume": 79797028.0, "adj_high": null, "adj_low": null, "adj_close": 146.55, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-18T00:00:00+0000" }, { "open": 143.77, "high": 144.9, "low": 143.51, "close": 144.84, "volume": 67885200.0, "adj_high": null, "adj_low": null, "adj_close": 144.84, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-15T00:00:00+0000" }, { "open": 142.11, "high": 143.88, "low": 141.51, "close": 143.76, "volume": 69907100.0, "adj_high": null, "adj_low": null, "adj_close": 143.76, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-14T00:00:00+0000" }, { "open": 141.235, "high": 141.4, "low": 139.2, "close": 140.91, "volume": 74732031.0, "adj_high": null, "adj_low": null, "adj_close": 140.91, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-13T00:00:00+0000" }, { "open": 143.23, "high": 143.25, "low": 141.0401, "close": 141.51, "volume": 73035862.0, "adj_high": null, "adj_low": null, "adj_close": 141.51, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-12T00:00:00+0000" }, { "open": 142.27, "high": 144.81, "low": 141.81, "close": 142.81, "volume": 63012662.0, "adj_high": null, "adj_low": null, "adj_close": 142.81, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-11T00:00:00+0000" }, { "open": 144.03, "high": 144.18, "low": 142.56, "close": 142.9, "volume": 58718700.0, "adj_high": null, "adj_low": null, "adj_close": 142.9, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-08T00:00:00+0000" }, { "open": 143.06, "high": 144.215, "low": 142.73, "close": 143.29, "volume": 61732656.0, "adj_high": null, "adj_low": null, "adj_close": 143.29, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-07T00:00:00+0000" }, { "open": 139.47, "high": 142.15, "low": 138.37, "close": 142.0, "volume": 83049259.0, "adj_high": null, "adj_low": null, "adj_close": 142.0, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-06T00:00:00+0000" }, { "open": 139.49, "high": 142.24, "low": 139.36, "close": 141.11, "volume": 80861062.0, "adj_high": null, "adj_low": null, "adj_close": 141.11, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-05T00:00:00+0000" }, { "open": 141.76, "high": 142.21, "low": 138.27, "close": 139.14, "volume": 98078066.0, "adj_high": null, "adj_low": null, "adj_close": 139.14, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-04T00:00:00+0000" }, { "open": 141.9, "high": 142.92, "low": 139.1101, "close": 142.65, "volume": 94639581.0, "adj_high": null, "adj_low": null, "adj_close": 142.65, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-10-01T00:00:00+0000" }, { "open": 143.66, "high": 144.378, "low": 141.3, "close": 141.5, "volume": 88625397.0, "adj_high": null, "adj_low": null, "adj_close": 141.5, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-30T00:00:00+0000" }, { "open": 142.47, "high": 144.45, "low": 142.03, "close": 142.83, "volume": 74602044.0, "adj_high": null, "adj_low": null, "adj_close": 142.83, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-29T00:00:00+0000" }, { "open": 143.25, "high": 144.75, "low": 141.7, "close": 141.91, "volume": 108972340.0, "adj_high": null, "adj_low": null, "adj_close": 141.91, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-28T00:00:00+0000" }, { "open": 145.47, "high": 145.95, "low": 143.82, "close": 145.37, "volume": 73852016.0, "adj_high": null, "adj_low": null, "adj_close": 145.37, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-27T00:00:00+0000" }, { "open": 145.66, "high": 147.47, "low": 145.56, "close": 146.92, "volume": 53434200.0, "adj_high": null, "adj_low": null, "adj_close": 146.92, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-24T00:00:00+0000" }, { "open": 146.65, "high": 147.08, "low": 145.64, "close": 146.83, "volume": 64838170.0, "adj_high": null, "adj_low": null, "adj_close": 146.83, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-23T00:00:00+0000" }, { "open": 144.45, "high": 146.43, "low": 143.7001, "close": 145.85, "volume": 76404341.0, "adj_high": null, "adj_low": null, "adj_close": 145.85, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-22T00:00:00+0000" }, { "ope": 143.93, "high": 144.6, "low": 142.78, "close": 143.43, "volume": 75833962.0, "adj_high": null, "adj_low": null, "adj_close": 143.43, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-21T00:00:00+0000" }, { "open": 143.8, "high": 144.84, "low": 141.28, "close": 142.94, "volume": 123478863.0, "adj_high": null, "adj_low": null, "adj_close": 142.94, "adj_open": null, "adj_volume": null, "split_factor": 1.0, "dividend": 0.0, "symbol": "AAPL", "exchange": "XNAS", "date": "2021-09-20T00:00:00+0000" }]`



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

function mainInfo(){
    document.getElementById("title").innerHTML = STOCK_NAME
    document.getElementById("code").innerHTML = STOCK_CODE
    document.getElementById("exchange").innerHTML = STOCK_EXCHANGE
    document.getElementById("address").innerHTML = STOCK_ADDRESS
    document.getElementById("description").innerHTML = STOCK_DESCRIPTION
    
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
                    buyableAmount = (budget / today).toFixed(0)
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
        console.log(stocks + " " + budget + " " + today)

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
    return daysRaised / daysPassed
}

function mainChart(){
    const ctx = document.getElementById('main-chart')

    closes = []
    opens = []
    highs = []
    lows = []
    labels = []

    for (let i = 0; i < st.length; i++) {
        closes[i] = st[i].close
        opens[i] = st[i].open
        highs[i] = st[i].high
        lows[i] = st[i].low
        date = new Date(st[i].date)
        labels[i] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
    }

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