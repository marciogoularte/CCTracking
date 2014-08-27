using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
    public class BusVisit :  BaseModel
    {
        public int CentreId { get; set; }
        public int BusId { get; set; }
        public int DriverId { get; set; }
        public int VisitTypeId { get; set; }
        public int BookingId { get; set; }
        public bool IsAvailableForBooking { get; set; }
        public bool IsAvailableForFutureBooking { get; set; }
        public long InitialReading { get; set; }
        public long FinalReading { get; set; }
        
    }
}
