using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MinificationApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string s = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

            //var mappedPath = System.Web.Hosting.HostingEnvironment.MapPath("~/SomePath");
            //server



            ////var uri = new Uri("http://closure-compiler.appspot.com/compile");
            ////WebClient client = new WebClient();
            //NameValueCollection collection = new NameValueCollection();
            //string code = "function hello(name) { " +
            //              "// Greets the user " +
            //              " alert('Hello, ' + name); }" +
            //              "hello('New user');";

            //collection.Add("js_code", code);
            //collection.Add("compilation_level", "ADVANCED_OPTIMIZATIONS");
            //collection.Add("output_format", "text");
            //collection.Add("output_info", "compiled_code");
            ////client.UploadValuesAsync(uri, collection);

            //string s = "";

            //// Create post string
            //StringBuilder postData = new StringBuilder();
            //postData.AppendFormat("?{0}={1}", "js_code", code);
            //postData.AppendFormat("&{0}={1}", "compilation_level", "ADVANCED_OPTIMIZATIONS");
            //postData.AppendFormat("&{0}={1}", "output_format", "text");
            //postData.AppendFormat("&{0}={1}", "output_info", "compiled_code");
            ////postData.AppendFormat("&{0}={1}", "Data", base64Data);

            ////// Calculate content length
            ////string dataString = postData.ToString();
            ////byte[] data = Encoding.UTF8.GetBytes(dataString);
            ////lock (_updateSync)
            ////{
            ////    _currentFileUploadLength = data.Length;
            ////}
            ////// Configure client
            ////WebClient client = new WebClient();
            ////client.Headers.Add("Content-Type: application/x-www-form-urlencoded");
            ////client.UploadStringCompleted += UploadStringCompleted;
            ////client.UploadProgressChanged += UploadProgressChanged;

            ////// Start upload
            ////client.UploadStringAsync(new Uri(GetUploadPageUrl(), UriKind.Absolute), dataString);




            //WebClient wc = new WebClient();
            //var URI = new Uri("http://closure-compiler.appspot.com/compile");
            //wc.Headers["Content-Type"] = "application/x-www-form-urlencoded";
            ////Or any other encoding type.
            ////If any key needed
            ////wc.Headers["KEY"] = "Your_Key_Goes_Here";
            ////wc.UploadStringCompleted += new UploadStringCompletedEventHandler(wc_UploadStringCompleted);
            //wc.UploadStringCompleted += wc_UploadStringCompleted;

            //wc.UploadStringAsync(URI, "POST", collection.ToString());   


        }

        //void wc_UploadStringCompleted(object sender, UploadStringCompletedEventArgs e)
        //{
        //    try
        //    {
        //        MessageBox.Show(e.Result);
        //        //e.result fetches you the response against your POST request.         

        //    }

        //    catch (Exception exc)
        //    {
        //        MessageBox.Show(exc.ToString());
        //    }
        //}
    }
}
