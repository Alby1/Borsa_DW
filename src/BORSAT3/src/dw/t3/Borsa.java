package dw.t3;

public class Borsa {

    /**
     * Creates instances of the Requester and Parser classes, then makes the parser parse the JSON string obtained from the requester.
     */
    public static void main(String[] args) {
        Requester requester = new Requester();
        Parser parser = new Parser();

        parser.parseJSON(requester.makeAPIRequest());
    }

}
