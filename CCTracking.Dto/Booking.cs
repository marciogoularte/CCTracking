using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
    public class Booking : BaseModel
    {
        public string ContactName { get; set; }
        public string ContactMobile { get; set; }
        public string ContactNic { get; set; }

        public string DeseasedName { get; set; }
        public byte DeseasedAge { get; set; }
        public byte DeseasedGender { get; set; }
        public byte CauseOfDeath { get; set; }
        public string Address { get; set; }

        public string BusPoint { get; set; }
        public int LandmarkId { get; set; }
        public int UnionCouncilId { get; set; }
        public int TownId { get; set; }
        public DateTime PickupDate { get; set; }

        public int PickupTime { get; set; }
        public int ReturnTime { get; set; }
        public int GraveyardId { get; set; }
        public int BusDetailId { get; set; }
        public long InitialReading { get; set; }
        public long FinalReading { get; set; }
        //Approx. Distance
        public string DistanceConvered { get; set; }
    }
}
