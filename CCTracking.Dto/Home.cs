using System;

namespace CCTracking.Dto
{
    public class Home : BaseModel
    {
        public int CentreId { get; set; }
        public int TotalBooking { get; set; }
        public string CentreDesc { get; set; }
        public decimal BookingAmount { get; set; }
        public double BookingMilage { get; set; }
        public decimal Receivable { get; set; }
        public decimal Maintenance  { get; set; }
        public decimal Profit { get; set; }

        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }


    }
}
