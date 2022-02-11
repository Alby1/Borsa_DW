package dw.t3;

import org.json.*;

public class Parser {

    /**
     * Parses the needed data from the JSON string.
     * @param json the JSON string to parse the data from.
     */
    public String parseJSON(String json) {
        JSONObject obj = new JSONObject(json);

        JSONArray arr = obj.getJSONArray("data");
        for (int i = 0; i < arr.length(); i++) {
            JSONObject value = arr.getJSONObject(i);
            value.remove("adj_high");
            value.remove("adj_low");
            value.remove("adj_close");
            value.remove("adj_open");
            value.remove("adj_volume");
            value.remove("split_factor");
            value.remove("dividend");
            if (i > 0) {
                value.remove("symbol");
                value.remove("exchange");
            }
        }
        return arr.toString();
    }

    /**
     * Defines ticker, starting and ending date of the stock, basing on the DW 2022 API
     * @param json json string
     * @return Data array
     */
    public String[] parseDataJSON(String json) {
        JSONObject obj = new JSONObject(json);

        String[] out = new String[3];

        out[0] = obj.getString("ticker");

        String[] date = obj.getString("starting_date").split("/");
        out[1] = date[2] + "-" + date[1] + "-" + date[0];

        date = obj.getString("ending_date").split("/");
        out[2] = date[2] + "-" + date[1] + "-" + date[0];

        return out;
    }

    /**
     * Gets image from a url
     * @param json
     * @return URL of the string
     */
    public String[] parseInfoJSON(String json){
        JSONObject obj = new JSONObject(json);
        String[] out = new String[3];

        out[0] = obj.getString("logo");
        out[1] = obj.getString("description");
        out[2] = obj.getString("hq_address") + ", " + obj.getString("hq_country");
        return out;
    }

}
