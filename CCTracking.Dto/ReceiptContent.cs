using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
    public class ReceiptContent : BaseModel
    {
        public int BookingId { get; set; }
        public string ContactName { get; set; }
        public string CentreDesc { get; set; }
        public string BookingReceipt { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime PrintDateTime { get; set; }
        public decimal BookingAmount { get; set; }
        public string UserName { get; set; }
    }
}
