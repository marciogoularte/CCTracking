using System;

namespace CCTracking.Dto
{
    public class SearchCriteria : BaseModel
    {
        public string ContactInfo { get; set; }
        public string DeseasedInfo { get; set; }
        public byte Gender { get; set; }
        public byte PaymentStatus { get; set; }
        public DateTime BookingDate { get; set; }
        public short Greveyard { get; set; }
        public short Centre { get; set; }
        public short Bus { get; set; }

    }
}
