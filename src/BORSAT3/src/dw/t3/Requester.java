package dw.t3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Requester {

    public String makeAPIRequest() {
        try {
            URL url = new URL("https://api.polygon.io/v2/aggs/ticker/AAPL/range/5/day/2020-06-01/2020-06-17?apiKey=EobVpUWh_Fk9qu1gQ818mOPJPJ3joOUR");
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

}
