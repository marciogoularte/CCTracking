using System;
using System.Configuration;
using System.Diagnostics;

namespace CCTracking.Dto
{
    public static class Logger
    {
        private static  string eventSource = "CCTracking.Api";
        private static string eventLog = "Application";
        private static bool isLoggingEnable = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableLogging"]);

        public static void WriteLogError(string message)
        {
            if (isLoggingEnable)
            {
                EventLog.WriteEntry(eventSource, message, EventLogEntryType.Error);
            }
        }
        public static void WriteLog(string message)
        {
            if (isLoggingEnable)
            {
                EventLog.WriteEntry(eventSource, message);
            }
        }
    }
}
