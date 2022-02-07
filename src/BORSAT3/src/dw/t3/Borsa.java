package dw.t3;

public class Borsa {

    String stock = "APPL";

    public static void main(String[] args) {
        Requester requester = new Requester();
        Parser parser = new Parser();

        parser.parseJSON(requester.makeAPIRequest());
    }

}
