using System;
namespace CCTracking.Dto
{
    public class ReceiptContent : BaseModel
    {
        public int BookingId { get; set; }
        public string ContactName { get; set; }
        public string ContactMobile { get; set; }
        public string ContactCnic { get; set; }
        public string DeseasedName { get; set; }
        public short DeseasedAge { get; set; }
        public string Address { get; set; }
        public string BusPoint { get; set; }
        public string PickupTime { get; set; }
        public string CentreDesc { get; set; }
        public string BookingReceipt { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime PrintDateTime { get; set; }
        public decimal BookingAmount { get; set; }
        public string UserName { get; set; }
        public string DriverName { get; set; }
        public string DriverContact { get; set; }
        public string ReferralName { get; set; }
        public string ReferralDetail { get; set; }
        public string BookingCentre { get; set; }
        public string CauseOfDeath { get; set; }
        public string NamazEJanazaHeldIn  { get; set; }
        public string InitialReading { get; set; }
        public string FinalReading { get; set; }
        public string Graveyard { get; set; }
        public string OtherDetail { get; set; }
        public string NamazEJanazaLocation { get; set; }

    }
}
