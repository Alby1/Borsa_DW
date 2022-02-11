package dw.t3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;

public class Requester {

    /**
     * Requests stock data from the API.
     * @return the JSON string with the stock values. If an exception occurs, null.
     */
    public String makeAPIRequest(String[] data) {
        try {
            URL url = new URL("http://api.marketstack.com/v1/eod?access_key=a034836444e629f41427fa8e9561cbb8&symbols=" + data[0] + "&limit=500&date_from=" + data[1] + "&date_to=" + data[2]);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();
        } catch (Exception ex) {
            return null;
        }
    }

    /**
     * Requests stock data from the API.
     * @return Returns a string that defines the answer to the call. If an exception occurs, null.
     */
    public String makeAPIDataRequest() {
        try {
            URL url = new URL("https://dwweb.gnet.it/dw2022/");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }
    }

    /**
     * Requests image from the API
     * @return Returns a string that defines the answer to the call. If an exception occurs, null.
     */
    public String makeImgRequest(String ticker){
        try{
            URL url = new URL("https://app.zenserp.com/api/v2/search?apikey=c208d4f0-8b2d-11ec-919e-6da79a0daee3&tbm=isch&q=" + ticker);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
