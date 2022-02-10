package dw.t3;

import java.awt.*;
import java.io.*;

public class Borsa {

    public static final double TPS = 0.2d;
    private static int count = 0;

    /**
     * Creates instances of the Requester and Parser classes, then makes the parser parse the JSON string obtained from the requester.
     */
    public static void main(String[] args) {
        double timePerTick = 1000000000 / TPS;
        double delta = 0;
        long now;
        long lastTime = System.nanoTime();
        while(true) {
            now = System.nanoTime();
            delta += (now - lastTime) / timePerTick;
            lastTime = now;
            if (delta >= 1) {
                tick();
                delta--;
            }
        }
    }

    public static void tick() {
        Requester requester = new Requester();
        Parser parser = new Parser();

        String[] data = parser.parseDataJSON(requester.makeAPIDataRequest());

        //String json = parser.parseJSON(requester.makeAPIRequest(data));
        String json = "test string (to not waste API quota)";

        String img = parser.parseImgJSON(requester.makeImgRequest(data[0]));

        String jarPath;
        try {
            jarPath = (Borsa.class.getProtectionDomain().getCodeSource().getLocation().toString()).replace("file:/", "");

            FileReader fr = new FileReader(jarPath + "\\HTML\\code.js");
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

            File jsFile = new File(jarPath + "\\HTML\\code.js");

            FileWriter fw = new FileWriter(jsFile);

            fw.write(entireFile);
            fw.close();

            if (count == 0) {
                File htmlFile = new File(jarPath + "\\HTML\\index.html");
                Desktop.getDesktop().browse(htmlFile.toURI());
                count = 1;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
