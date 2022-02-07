package dw.t3;

import org.json.*;

public class Parser {

    public void parseJSON(String json) {
        JSONObject obj = new JSONObject(json);

        JSONArray arr = obj.getJSONArray("results");
        for (int i = 0; i < arr.length(); i++) {
            JSONObject value = arr.getJSONObject(i);
            System.out.println(value.toString());
        }
    }

}
