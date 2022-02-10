package dw.t3;

import java.util.Locale;

public class Utils {

    /**
     * Gets informations about the OS that is being currently used
     */
    private static String OS = System.getProperty("os.name", "unknown").toLowerCase(Locale.ROOT);


    public static boolean isWindows()
    {
        return OS.contains("win");
    }

    public static boolean isMac()
    {
        return OS.contains("mac");
    }

    public static boolean isUnix()
    {
        return OS.contains("nux");
    }
}