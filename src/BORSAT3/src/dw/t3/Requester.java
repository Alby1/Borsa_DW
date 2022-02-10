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
            URL url = new URL("http://api.marketstack.com/v1/eod?access_key=ad6efcf74f8bee5e5615cc2146452418&symbols=" + data[0] + "&limit=500&date_from=" + data[1] + "&date_to=" + data[2]);
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

    public String makeImgRequest(String ticker){
        try{
            URL url = new URL("https://app.zenserp.com/api/v2/search?apikey=9c21add0-8a43-11ec-87bc-1dd77ace6f86&tbm=isch&q=" + ticker);
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
