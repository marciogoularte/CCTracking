using System;
namespace CCTracking.Dto
{
    public class BookingSummary : BaseModel
    {
        public string AlkhidmatCentre { get; set; }
        public string AlkhidmatCentreId { get; set; }
        public string BookingAmount { get; set; }
        public string BookingMilage { get; set; }
        public string Bookings { get; set; }
        public string Receivables { get; set; }
        public string BusNo { get; set; }
        public string BusId { get; set; }
        public string VisitTypeId { get; set; }
        public string VisitType { get; set; }
        public DateTime? VisitDate { get; set; }
        public string OutTime { get; set; }
        public string InTime { get; set; }
        public string TimeTaken { get; set; }
        public string Driver { get; set; }
        public string FuelRate { get; set; }
        public string FuelQuantity { get; set; }
        public string CurrentReading { get; set; }
        public string PreviusReading { get; set; }
        public string InchargeName { get; set; }
        public string AverageMilage { get; set; }
        public string PumpLocation { get; set; }
        public string FuelingReceipt { get; set; }

        public int UnpaidAmount { get; set; }
        public int PaidAmount { get; set; }
        public int PaidBooking { get; set; }
        public int UnpaidBooking { get; set; }
    }
}
