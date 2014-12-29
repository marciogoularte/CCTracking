using System.Collections.Generic;

namespace CCTracking.Dto
{
    public class ExtraCharges : BaseModel
    {
        public int BookingId { get; set; }
        public int BusId { get; set; }
        public decimal ExtraAmountCharge { get; set; }
        public string ExtraAmountReason { get; set; }
        public string ExtraAmountReceipt { get; set; }
        public decimal ActualBookingAmount { get; set; }
        public List<Bus> BusList { get; set; }
    }
}
