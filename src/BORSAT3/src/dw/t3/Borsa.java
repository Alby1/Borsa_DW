package dw.t3;

public class Borsa {

    public static void main(String[] args) {
        Requester requester = new Requester();
        Parser parser = new Parser();

        parser.parseJSON(requester.makeAPIRequest());
    }

}
