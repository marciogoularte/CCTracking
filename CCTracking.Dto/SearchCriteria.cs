using System;

namespace CCTracking.Dto
{
    public class SearchCriteria : BaseModel
    {
        public string ContactInfo { get; set; }
        public string DeseasedInfo { get; set; }
        public byte GenderId { get; set; }
        public byte PaymentStatusId { get; set; }
        public DateTime BookingDate { get; set; }
        public short GreveyardId { get; set; }
        public short CentreId { get; set; }
        public short BusId { get; set; }

    }

    public interface IBase
    {
        void BaseMetod(int i);
    }

    public abstract class Base
    {
        protected abstract void BaseMetod(int i);

    }

    public class Drived : Base
    {
        protected override void BaseMetod(int i)
        {

        }
        //public void DriveMethod()
        //{
        //    BaseMetod(2);
        //}
    }
}
