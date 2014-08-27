using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
    public class Bus : BaseModel
    {
        public int CentreId { get; set; }
        public int TrackingDeviceId { get; set; }
        public string RegistrationNo { get; set; }
        public string Model { get; set; }
        public string Description { get; set; }

    }
}
