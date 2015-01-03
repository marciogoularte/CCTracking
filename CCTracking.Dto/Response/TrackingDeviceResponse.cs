using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class TrackingDeviceResponse : BaseModelResponse
    {
        public TrackingDevice TrackingDeviceModel { get; set; }
        public List<TrackingDevice> TrackingDeviceList { get; set; }
    }
}
