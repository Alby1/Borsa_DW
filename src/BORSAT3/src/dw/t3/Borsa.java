package dw.t3;

import java.io.*;
import java.net.URI;

public class Borsa {

    /**
     * Creates instances of the Requester and Parser classes, then makes the parser parse the JSON string obtained from the requester.
     */
    public static void main(String[] args) {
        Requester requester = new Requester();
        Parser parser = new Parser();

        String[] data = parser.parseDataJSON(requester.makeAPIDataRequest());

        String json = parser.parseJSON(requester.makeAPIRequest(data));
        //String json = "test string (to not waste API quota)";

        String img = parser.parseImgJSON(requester.makeImgRequest(data[0]));

        String jarPath;
        try {
            jarPath = (Borsa.class.getProtectionDomain().getCodeSource().getLocation().toString()).replace("file:/", "") + "\\HTML\\code.js";

            FileReader fr = new FileReader(jarPath);
            BufferedReader br = new BufferedReader(fr);
            String line, entireFile = "";
            int lines = 0;
            while ((line = br.readLine()) != null) {
                if (json != null) {
                    if (lines == 0) {
                        line = "st = `" + json + "`";
                    } else if(lines == 1){
                        line = "dynamicImg = \"" + img + "\"";
                    }
                }
                entireFile += line + "\n";
                lines++;
            }

            File jsFile = new File(jarPath);

            FileWriter fw = new FileWriter(jsFile);

            fw.write(entireFile);
            fw.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        //TODO: aprire index.html nel browser
    }

}
