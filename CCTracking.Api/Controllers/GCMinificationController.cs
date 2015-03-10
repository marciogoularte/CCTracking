using System;
using System.IO;
using System.Threading;
using System.Web.Http;
using CCTracking.Api.Helpers;

namespace CCTracking.Api.Controllers
{
    public class GCMinificationController : ApiController
    {
        [HttpGet]
        public string GetMiniFiedJS()
        {
            string rootPath = @"C:\LiveProjects\SourceCode\CCTrackingTS\CCTrackingTS\CCTracking.WebClient";
            string[] files = Directory.GetFiles(rootPath, "*.js", SearchOption.AllDirectories);
            string destinationPath = @"C:\Temp\CCTrackingPublished\CCTracking.WebClient-Minified\";
            string destinationFilePath = string.Empty;
            GoogleClosure gc = new GoogleClosure();
            string minifiedJS = string.Empty;
            string currentDestinationFile = string.Empty;
            try
            {
                foreach (var filePath in files)
                {
                    
                    destinationFilePath = filePath.Replace("C:\\LiveProjects\\SourceCode\\CCTrackingTS\\CCTrackingTS\\CCTracking.WebClient\\",destinationPath);
                    Directory.CreateDirectory(Path.GetDirectoryName(destinationFilePath));
                    currentDestinationFile = destinationFilePath;
                    if (!File.Exists(destinationFilePath))
                    {
                        File.Create(destinationFilePath).Dispose();
                        minifiedJS = gc.Compress(filePath);
                        if (!string.IsNullOrEmpty(minifiedJS))
                        {
                            using (TextWriter tw = new StreamWriter(destinationFilePath, true))
                            {
                                tw.WriteLine(minifiedJS);
                                tw.Close();
                            }
                        }
                        else
                        {
                            File.Delete(currentDestinationFile);
                        }
                    }
                    Thread.Sleep(30000);
                }
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("Too many compiles performed recently"))
                {
                    File.Delete(currentDestinationFile);
                }
                throw new Exception("Too many compiles performed recently. Try again later.");
            }
            return "MINIFICATION COMPLETED SUCCESSFULLY:)";
        }
    }
}
