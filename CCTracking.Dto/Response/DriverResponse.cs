using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class DriverResponse : BaseModelResponse
    {
        public Driver DriverModel { get; set; }
        public List<Driver> DriverList { get; set; }
    }

    public class DriverGridResponse : BaseModelResponse
    {
        public List<DriverGrid> DriverList { get; set; }
    }
}
