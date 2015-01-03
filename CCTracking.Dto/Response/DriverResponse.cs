using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class DriverResponse : BaseModelResponse
    {
        public Driver DriverModel { get; set; }
        public List<Driver> DriverList { get; set; }
    }
}
