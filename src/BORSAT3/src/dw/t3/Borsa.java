package dw.t3;

import java.io.*;

public class Borsa {

    private static int count = 0;

    /**
     * Calls the tick method every 20 seconds.
     */
    public static void main(String[] args) {
        while (true) {
            try {
                tick();
                Thread.sleep(20000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Creates instances of the Requester and Parser classes, then makes the parser parse the JSON string obtained from the requester.
     */
    private static void tick() {
        Requester requester = new Requester();
        Parser parser = new Parser();

        String[] data = parser.parseDataJSON(requester.makeAPIDataRequest());

        String json = parser.parseJSON(requester.makeAPIRequest(data));
        String[] info = parser.parseInfoJSON(requester.makeInfoRequest(data[0]));

        String jarPath;
        try {
            jarPath = (Borsa.class.getProtectionDomain().getCodeSource().getLocation().getPath()).replace("file:/", "")
                    .replaceFirst("/", "")
                    .replace("src.jar", "");
            System.out.println(jarPath);

            FileReader fr = null;
            if (Utils.isWindows()) {
                fr = new FileReader(jarPath + "HTML/code.js");
            } else if (Utils.isMac() || Utils.isUnix()) {
                fr = new FileReader("/" + jarPath + "HTML/code.js");
            }
            BufferedReader br = new BufferedReader(fr);
            String line, entireFile = "";
            int lines = 0;
            while ((line = br.readLine()) != null) {
                if (json != null) {
                    if (lines == 0) {
                        line = "st = `" + json + "`";
                    } else if(lines == 1) {
                        line = "dynamicImg = \"" + info[0] + "\"";
                    } else if(lines == 2) {
                        line = "stock_description = \"" + info[1] + "\"";
                    } else if(lines == 3) {
                        line = "stock_address = \"" + info[2] + "\"";
                    }
                }
                entireFile += line + "\n";
                lines++;
            }

            File jsFile = null;
            File htmlFile = null;
            if (Utils.isWindows()) {
                htmlFile = new File(jarPath + "HTML/index.html");
                jsFile = new File(jarPath + "HTML/code.js");
            } else if (Utils.isMac() || Utils.isUnix()) {
                htmlFile = new File("/" + jarPath + "HTML/index.html");
                jsFile = new File("/" + jarPath + "HTML/code.js");
            }

            FileWriter fw = new FileWriter(jsFile);

            fw.write(entireFile);
            fw.close();

            if (count == 0) {
                String command = "";
                if (Utils.isUnix()) {
                    command = "xdg-open " + htmlFile;
                } else if (Utils.isWindows()) {
                    command = "cmd /C start " + htmlFile;
                } else if (Utils.isMac()) {
                    command = "open " + htmlFile;
                }

                try {
                    Runtime.getRuntime().exec(command);
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
                count = 1;
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
