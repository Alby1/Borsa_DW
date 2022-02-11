package dw.t3;

import java.io.*;

public class Borsa {

    private static int count = 0;

    /**
     * Creates instances of the Requester and Parser classes, then makes the parser parse the JSON string obtained from the requester.
     */
    public static void main(String[] args) {
        Requester requester = new Requester();
        Parser parser = new Parser();

        String[] data = parser.parseDataJSON(requester.makeAPIDataRequest());

        //String json = parser.parseJSON(requester.makeAPIRequest(data));
        //String img = parser.parseImgJSON(requester.makeImgRequest(data[0]));

        //use these two strings below and comment top two lines to not waste API quota
        String json = "[{\"date\":\"2021-12-31T00:00:00+0000\",\"symbol\":\"AAPL\",\"volume\":64062262,\"high\":179.23,\"low\":177.26,\"exchange\":\"XNAS\",\"close\":177.57,\"open\":178.085},{\"date\":\"2021-12-30T00:00:00+0000\",\"volume\":59619100,\"high\":180.57,\"low\":178.09,\"close\":178.2,\"open\":179.47}]";
        String img = "https://g.foolcdn.com/art/companylogos/square/aapl.png";

        String jarPath;
        try {
            jarPath = (Borsa.class.getProtectionDomain().getCodeSource().getLocation().getPath()).replace("file:/", "")
                    .replaceFirst("/", "")
                    .replace("src.jar", "");
            System.out.println(jarPath);

            FileReader fr = new FileReader(jarPath + "HTML/code.js");
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

            File jsFile = new File(jarPath + "HTML/code.js");

            FileWriter fw = new FileWriter(jsFile);

            fw.write(entireFile);
            fw.close();

            if (count == 0) {
                String command = "";
                if (Utils.isUnix()) {
                    command = "xdg-open " + (jarPath + "HTML/index.html");
                } else if (Utils.isWindows()) {
                    command = "cmd /C start " + ("/" + jarPath + "HTML/index.html");
                } else if (Utils.isMac()) {
                    command = "open " + (jarPath + "HTML/index.html");
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
