using System.Diagnostics;

namespace CCTracking.Dto
{
    public static class Logger
    {
        private static  string eventSource = "CCTracking.Api";
        private static string eventLog = "Application";

        public static void WriteLog(string message)
        {
            EventLog.WriteEntry(eventSource, message);
        }
    }
}
