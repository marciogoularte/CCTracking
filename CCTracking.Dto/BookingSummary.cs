using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
   public class BookingSummary : BaseModel
    {
        public string Alkhidmatentre { get; set; }
        public int TodaysBooking { get; set; }
        public int UserTotalBooking { get; set; }
        public int UserPiadBooking { get; set; }
        public int UserUnpaidBooking { get; set; }
    }
}
