package dw.t3;

import org.json.*;

public class Parser {

    public void parseJSON(String json) {
        JSONObject obj = new JSONObject(json);

        JSONArray arr = obj.getJSONArray("data");
        JSONObject value = arr.getJSONObject(0);
        value.remove("adj_high");
        value.remove("adj_low");
        value.remove("adj_close");
        value.remove("adj_open");
        value.remove("adj_volume");
        value.remove("split_factor");
        value.remove("dividend");
        for (int i = 1; i < arr.length(); i++) {
            value = arr.getJSONObject(i);
            value.remove("adj_high");
            value.remove("adj_low");
            value.remove("adj_close");
            value.remove("adj_open");
            value.remove("adj_volume");
            value.remove("split_factor");
            value.remove("dividend");
            value.remove("symbol");
            value.remove("exchange");
            System.out.println(value);
        }
        System.out.println(arr);
    }

}
